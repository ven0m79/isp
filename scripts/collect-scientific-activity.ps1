$ErrorActionPreference = "Stop"

$categoryPages = @(
  "https://www.ispnpp.kiev.ua/category/deyateln-ua/naukova-dijaltist/",
  "https://www.ispnpp.kiev.ua/category/deyateln-ua/naukova-dijaltist/page/2/",
  "https://www.ispnpp.kiev.ua/category/deyateln-ua/naukova-dijaltist/page/3/",
  "https://www.ispnpp.kiev.ua/category/deyateln-ua/naukova-dijaltist/page/4/"
)

Add-Type -AssemblyName System.Web

function Normalize-Text {
  param([string]$Text)
  if ($null -eq $Text) { return "" }
  $decoded = [System.Web.HttpUtility]::HtmlDecode($Text)
  return (($decoded -replace "<[^>]+>", " ") -replace "\s+", " ").Trim()
}

function Resolve-Url {
  param([string]$BaseUrl, [string]$Href)
  if ([string]::IsNullOrWhiteSpace($Href)) { return "" }
  return ([System.Uri]::new([System.Uri]::new($BaseUrl), $Href)).AbsoluteUri
}

$articles = New-Object System.Collections.Generic.List[object]
foreach ($url in $categoryPages) {
  try {
    $html = (Invoke-WebRequest -Uri $url -UseBasicParsing).Content
    $matches = [regex]::Matches(
      $html,
      "<h2[^>]*class=[""'][^""']*entry-title[^""']*[""'][^>]*>\s*<a[^>]*href=[""']([^""']+)[""'][^>]*>(.*?)</a>",
      [System.Text.RegularExpressions.RegexOptions]::IgnoreCase -bor [System.Text.RegularExpressions.RegexOptions]::Singleline
    )
    foreach ($match in $matches) {
      $articles.Add([pscustomobject]@{
        title = Normalize-Text $match.Groups[2].Value
        url = $match.Groups[1].Value
        categoryPage = $url
      })
    }
  } catch {
    Write-Warning "Could not fetch ${url}: $($_.Exception.Message)"
  }
}

$uniqueArticles = $articles | Sort-Object url -Unique
$details = New-Object System.Collections.Generic.List[object]

foreach ($article in $uniqueArticles) {
  try {
    $html = (Invoke-WebRequest -Uri $article.url -UseBasicParsing).Content
    $contentMatch = [regex]::Match(
      $html,
      "<div[^>]*class=[""'][^""']*entry-content[^""']*[""'][^>]*>(.*?)</div>\s*</div>",
      [System.Text.RegularExpressions.RegexOptions]::IgnoreCase -bor [System.Text.RegularExpressions.RegexOptions]::Singleline
    )
    $contentHtml = if ($contentMatch.Success) { $contentMatch.Groups[1].Value } else { $html }
    $links = [regex]::Matches($contentHtml, "<a\s+[^>]*href=[""']([^""']+)[""'][^>]*>(.*?)</a>", [System.Text.RegularExpressions.RegexOptions]::IgnoreCase -bor [System.Text.RegularExpressions.RegexOptions]::Singleline) |
      ForEach-Object {
        [pscustomobject]@{
          text = Normalize-Text $_.Groups[2].Value
          url = Resolve-Url $article.url $_.Groups[1].Value
        }
      }
    $images = [regex]::Matches($contentHtml, "<img\s+[^>]*src=[""']([^""']+)[""'][^>]*>", [System.Text.RegularExpressions.RegexOptions]::IgnoreCase -bor [System.Text.RegularExpressions.RegexOptions]::Singleline) |
      ForEach-Object { Resolve-Url $article.url $_.Groups[1].Value }
    $dateMatch = [regex]::Match($html, "<time[^>]*datetime=[""']([^""']+)[""']", [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
    $details.Add([pscustomobject]@{
      title = $article.title
      url = $article.url
      date = if ($dateMatch.Success) { $dateMatch.Groups[1].Value } else { "" }
      text = Normalize-Text $contentHtml
      links = @($links)
      pdfs = @($links | Where-Object { $_.url -match "\.pdf($|\?)" })
      images = @($images | Sort-Object -Unique)
    })
  } catch {
    Write-Warning "Could not fetch article $($article.url): $($_.Exception.Message)"
  }
}

$details |
  ConvertTo-Json -Depth 4 |
  Set-Content -LiteralPath "scripts/scientific-activity-articles.json" -Encoding UTF8

Write-Output "Saved $($details.Count) article details."

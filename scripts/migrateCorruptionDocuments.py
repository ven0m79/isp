"""Migrate corruption-prevention PDFs, images, and the editable report template."""
from io import BytesIO
from pathlib import Path
import json
import urllib.request
import zipfile
import migrateFundDocuments as migration
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / 'public' / 'activity' / 'prevention-of-corruption'

def download(relative):
    request = urllib.request.Request('https://www.ispnpp.kiev.ua/wp-content/uploads/' + relative,
        headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(request, timeout=90) as response:
        return response.read()

def main():
    migration.DEST = DEST / 'documents'
    migration.DOCUMENTS = [
        ('anti-corruption-order', '2017/anti-korup/anti-nakaz.pdf'),
        ('anti-corruption-program', '2017/anti-korup/anti-koruptsiyna-programa.pdf'),
    ]
    migration.main()
    results = []
    images = DEST / 'images'
    images.mkdir(parents=True, exist_ok=True)
    for name, source in [('anti-corruption-header', '2017/05/korruption.png'),
                         ('stop-corruption', '2017/11/stop-korruption.png')]:
        data = download(source)
        with Image.open(BytesIO(data)) as image:
            output = images / (name + '.webp')
            image.save(output, format='WEBP', lossless=True, method=6)
        results.append({'file': 'images/' + output.name, 'originalBytes': len(data),
            'compressedBytes': output.stat().st_size})
    data = download('2017/anti-korup/povid_korupcuya.doc')
    if not data.startswith(bytes.fromhex('D0CF11E0A1B11AE1')):
        raise ValueError('Report template is not a Word document')
    template = DEST / 'documents' / 'corruption-report-template.doc'
    template.write_bytes(data)
    archive = template.with_suffix('.zip')
    with zipfile.ZipFile(archive, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as zipped:
        zipped.writestr(template.name, data)
    with zipfile.ZipFile(archive) as zipped:
        assert zipped.read(template.name) == data
    results.append({'file': 'documents/' + archive.name, 'originalBytes': len(data),
        'compressedBytes': archive.stat().st_size, 'contentsVerified': True})
    (DEST / 'asset-compression.json').write_text(json.dumps(results, indent=2) + '\n')
    for result in results:
        print(json.dumps(result), flush=True)

if __name__ == '__main__':
    main()

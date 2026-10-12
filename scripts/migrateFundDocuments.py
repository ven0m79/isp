"""Download and losslessly compress fund PDFs; verify text with Ghostscript.

Requires pikepdf (pip install --target .tools/fund-pdf pikepdf).
"""
from pathlib import Path
import json
import shutil
import subprocess
import sys
import tempfile
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / '.tools' / 'fund-pdf'))
import pikepdf
DEST = ROOT / 'public' / 'chornobyl-nuclear-safety-science-fund'
GS = Path('C:/Program Files/gs/gs10.03.1/bin/gswin64c.exe')
DOCUMENTS = [
    ('charter', '2022/06/statut_fund.pdf'),
    ('report-2022-2024', '2022/06/zvit-22-24.pdf'),
    ('statement-uah-2022-2024', '2022/12/uah.pdf'),
    ('statement-currency-2022-2024', '2022/12/usd.pdf'),
    ('statement-2021-2022-september', '2022/06/invoice3378927039865586758.pdf'),
    ('statement-2021-2022-december-1', '2022/12/invoice4992659264196674809.pdf'),
    ('statement-2021-2022-december-2', '2022/12/invoice6582040703966530464.pdf'),
    ('statement-may-2022-july-2023', '2022/12/statements_doc.pdf'),
    ('statement-usd-april-2022-july-2023', '2022/12/dollar_July2023.pdf'),
]

def main():
    DEST.mkdir(parents=True, exist_ok=True)
    results = []
    with tempfile.TemporaryDirectory(prefix='isp-fund-') as temporary:
        for name, remote in DOCUMENTS:
            original = Path(temporary) / (name + '.pdf')
            request = urllib.request.Request(
                'https://www.ispnpp.kiev.ua/wp-content/uploads/' + remote,
                headers={'User-Agent': 'Mozilla/5.0'},
            )
            with urllib.request.urlopen(request, timeout=90) as response:
                original.write_bytes(response.read())
            data = original.read_bytes()
            # Some bank statements are PDFs wrapped in a DER signed-data container.
            # Extract the PDF for browser viewing; compression creates a new document.
            start = data.find(b'%PDF-')
            end = data.rfind(b'%%EOF')
            if start < 0 or end < start:
                raise ValueError('Not a PDF: ' + name)
            original.write_bytes(data[start:end + 5] + b'\n')
            output = DEST / (name + '.pdf')
            with pikepdf.open(original) as pdf:
                page_count = len(pdf.pages)
                pdf.save(output, compress_streams=True, recompress_flate=True,
                    object_stream_mode=pikepdf.ObjectStreamMode.generate)
            with pikepdf.open(output) as pdf:
                if len(pdf.pages) != page_count:
                    raise ValueError('PDF page count changed: ' + name)
            subprocess.run([str(GS), '-sDEVICE=nullpage', '-dNOPAUSE', '-dBATCH',
                '-dQUIET', str(output)], check=True)
            # Keep the smaller original if it is already better compressed.
            if output.stat().st_size >= original.stat().st_size:
                shutil.copyfile(original, output)
            extracted = []
            for suffix, pdf in [('original', original), ('compressed', output)]:
                text = Path(temporary) / (name + '-' + suffix + '.txt')
                subprocess.run([str(GS), '-sDEVICE=txtwrite', '-dNOPAUSE', '-dBATCH',
                    '-dQUIET', '-sOutputFile=' + str(text), str(pdf)], check=True)
                extracted.append(text.read_text(encoding='utf-8'))
            if ''.join(extracted[0].split()) != ''.join(extracted[1].split()):
                raise ValueError('PDF text changed during compression: ' + name)
            result = {'file': output.name, 'originalBytes': original.stat().st_size,
                'compressedBytes': output.stat().st_size, 'pages': page_count,
                'textVerified': True}
            results.append(result)
            print(json.dumps(result), flush=True)
    (DEST / 'compression.json').write_text(json.dumps(results, indent=2) + '\n')

if __name__ == '__main__':
    main()

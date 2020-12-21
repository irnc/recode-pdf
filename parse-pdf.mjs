import { getDocument } from 'pdfjs-dist/es5/build/pdf.js';

const pdfWithEncodingIssue = 'input.pdf';
const doc = await getDocument({
    url: pdfWithEncodingIssue,
    pdfBug: true,
}).promise;

// PDFPageProxy
// (WorkerTransport) _transport.CMapReaderFactory
const page = await doc.getPage(1);
const content = await page.getTextContent();

console.log({ doc, page, sampleContentItem: content.items[1] });

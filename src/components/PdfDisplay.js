import React, { PureComponent } from 'react';
import { Document, Page, pdfjs} from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = 
  `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const path = './components/static_files/output.pdf';

export default class PdfDisplay extends PureComponent {
  render () {
    return (
      <Document file={path}>
        <Page pageNumber={1} />
      </Document>
    );
  }
 }


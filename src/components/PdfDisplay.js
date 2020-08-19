import React, { PureComponent } from 'react';
import { Document, Page, pdfjs} from 'react-pdf';

// try importing pdfjs from pdfjs itself rather than react-pdf

// import 'pdfjs';\
// this doesn't work


pdfjs.GlobalWorkerOptions.workerSrc = 
  `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// display a pdf local to the front end directory
// const path = process.env.PUBLIC_URL + '/output.pdf';

// display pdf hosted online without looking at public folder
const path ='cors-anywhere.herokuapp.com/https://planetpdf.com/planetpdf/pdfs/warnock_camelot.pdf';
// NOTE: there is a CORS issue with pdf.js blocking this



export default class PdfDisplay extends PureComponent {
  render () {
    return (
      <Document file={path}>
        <Page pageNumber={1} />
      </Document>
    );
  }
 }
//

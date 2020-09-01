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
// const path ='cors-anywhere.herokuapp.com/https://planetpdf.com/planetpdf/pdfs/warnock_camelot.pdf';
// NOTE: there is a CORS issue with pdf.js blocking this, thus the 'cors-anywhere' thing

// the below is not blocked by CORS, likely because the bucket is public
<<<<<<< HEAD
// const path = "https://ocr-backend-bucket.s3.amazonaws.com/static/post_images/test_file_to_ocr.pdf"
=======
const path = "https://ocr-backend-bucket.s3.amazonaws.com/static/post_images/"


>>>>>>> 2ef8db0e9083ae7e17fdd02c0cfd684e2bcda1f8

//Now what we want is grab the whole list of files from the back end S3 bucket 
const path ="https://ocr-backend-bucket.s3.amazonaws.com/"

export default class PdfDisplay extends PureComponent {
  render () {
    return (
      <Document file={path}>
        {/* You can set the page number below to anything you want */}
        <Page pageNumber={1} />
<<<<<<< HEAD
        {/* the below allows the user to download a specific file; works great  */}
        <a href="https://ocr-backend-bucket.s3.amazonaws.com/static/post_images/test_file_to_ocr.pdf">link</a> 
        
=======
        {/* <a href="https://ocr-backend-bucket.s3.amazonaws.com/static/post_images/test_file_to_ocr.pdf">Link to Download</a> */}
>>>>>>> 2ef8db0e9083ae7e17fdd02c0cfd684e2bcda1f8
      </Document>
      

    );
  }
 }


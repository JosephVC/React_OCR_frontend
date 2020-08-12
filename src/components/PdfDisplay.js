import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

// the below is the plain-vanilla way to implement react-pdf,
// and it doesn't work . . .
// const DisplayPDF = () => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
 
//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }
 
//   return (
//     <div>
//       <Document
//         file="src\output.pdf"
//         onLoadSuccess={onDocumentLoadSuccess}
//       >
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>Page {pageNumber} of {numPages}</p>
//     </div>
//   );
// }

const DisplayPDF = () => {
    return (
      <embed src="src\output.pdf" /> 

    );
}

export default DisplayPDF;
import React, {Component } from 'react';
// import PdfDisplay from './components/PdfDisplay'
import UploadForm from './components/UploadForm';
// import FileList from './components/FileList'
import FileGrid from './components/FileGrid';

class App extends Component {
    render() {
        return (
            <div >
                <UploadForm />
                <FileGrid />
                {/* <FileList /> */}
                {/* Need to figure out how to display a specific pdf; this is on hold
                <PdfDisplay /> */}
                
            </div>
        )
    }
}

export default App;
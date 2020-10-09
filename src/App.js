import React, {Component } from 'react';
import UploadForm from './components/UploadForm';
import FileList from './components/FileList';
import Pdfdisplay from './components/PdfDisplay'

// Create an App that loads our other components
class App extends Component {
    render() {
        return (
            <div >
                <UploadForm />
                {/* <FileList /> */}
                <Pdfdisplay />
               
                
            </div>
        )
    }
}

export default App;
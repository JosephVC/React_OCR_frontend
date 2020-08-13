import React, {Component } from 'react';
import PdfDisplay from './components/PdfDisplay'
import UploadForm from './components/UploadForm'

class App extends Component {
    render() {
        return (
            <div >
                <UploadForm />
                <PdfDisplay />
                
            </div>
        )
    }
}

export default App;
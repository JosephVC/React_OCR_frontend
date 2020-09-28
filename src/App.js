import React, {Component } from 'react';
import UploadForm from './components/UploadForm';
import FileGrid from './components/FileGrid';

// Create an App that loads our other components
class App extends Component {
    render() {
        return (
            <div >
                <UploadForm />
                <FileGrid />
               
                
            </div>
        )
    }
}

export default App;
import React, {Component } from 'react';
import UploadForm from './components/UploadForm';
import FileList from './components/FileList';

// Create an App that loads our other components
class App extends Component {
    render() {
        return (
            <div >
                <UploadForm />
                <FileList />
               
                
            </div>
        )
    }
}

export default App;
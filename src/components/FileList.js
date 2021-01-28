import React, { Component } from 'react';

class FileList extends Component {
    state = {
        fileList: []
    };

    async componentDidMount () {
        try {
            // fetch the data from the api
            // local dev url
            const res = await fetch('http://127.0.0.1:8000/');
            // heroku-based backend production url
            // const res = await fetch('https://django-ocr-backend.herokuapp.com/')
            const fileList = await res.json();
            this.setState({
                fileList
            });
       } catch (e) {
           console.log(e);
       }
    }

    render () {
        return (
            <div>
                {this.state.fileList.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.content}</p>
                        <p><a href={item.file} download>file</a></p>
                    </div>
                ))}
            </div> 
        );
    }
}


export default FileList;
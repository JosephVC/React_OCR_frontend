import React, { Component } from 'react';
 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">   
        <p>
            Upload pdf file below to OCR.
            </p>
        {/* TODO: create form  */} 
        <form>
          <label>
            Name:
            <input type="text" name="name" />  
          </label>
          <input type="submit" value="Submit" />  
        </form>  
        </header>
        <body className="App-body"> 
     
        </body >
      </div>
    );
  }
  
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'; 
import './index.css';

// import components
import App from './App';
import Footer from './components/footer';
import Header from './components/header';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';

// import {DisplayPDF} from './components/pdf-display';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <React.StrictMode>
      <Header />
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
      </Switch>
      <Footer />
    </React.StrictMode>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


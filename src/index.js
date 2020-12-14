import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'; 
import './index.css';

// import components
import App from './App';
import Footer from './components/footer';
import Header from './components/header';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import Single from './components/posts/single';
import Search from './components/posts/search';

// Admin controls
import Admin from './Admin';
import Create from './components/admin/create';
import Edit from './components/admin/edit';
import Delete from './components/admin/delete';

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
        <Route path='/posts/:slug' component={Single} />
        <Route path='/search' component={Search} />
        {/* Admin paths */}
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/admin/create' component={Create} />
        <Route exact path='/admin/edit/:id' component={Edit} />
        <Route exact path='/admin/delete/:id' component={Delete} /> 
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


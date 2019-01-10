import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Christmas from './components/christmas';
import Newyear from './components/newyear';
import Independenceday from './components/independenceday';
import Thanksgiving from './components/thanksgiving';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';
import './style/independenceday';
import './style/newyear';
import './style/thanksgiving';
import './style/christmas';
import './style/home';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
      <div>
        <div className="nav-bar">
        <div className="nav-background">
            <Link to="/"><a>Host</a></Link>
            <Link to="/christmas"><p>Christmas</p></Link>
            <Link to="/newyear"><h3>Newyear</h3></Link>
            <Link to="/independenceday"><b>Independenceday</b></Link>
            <Link to="/thanksgiving"><u>Thanksgiving</u></Link>
          </div>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/christmas" component={Christmas} />
          <Route path="/newyear" component={Newyear} />
          <Route path="/independenceday" component={Independenceday} />
          <Route path="/thanksgiving" component={Thanksgiving} />
        </div>  
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);

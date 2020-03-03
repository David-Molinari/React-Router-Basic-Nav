import React from 'react';
import {
  Route
} from 'react-router-dom';
import './App.css';
import { Navigation, Home, About, Contact  } from './components';

const App = () => (
    <div class='appJSFile'>
      <Navigation />
      <Route exact path="/" component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>
    </div>
);

export default App;

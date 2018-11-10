import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import { Route } from 'react-router-dom';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import SmurfCard from './SmurfCard';

const App = props => {
  return (
    <div className="App">
      <Route exact path="/" render={(props) => <Smurfs {...props} />} />
      <Route path="/smurf-form" render={(props) => <SmurfForm {...props} />} />
      <Route path="/smurfs/:id" render={(props) => <SmurfCard {...props} />} />
    </div>
  );
}

export default App;

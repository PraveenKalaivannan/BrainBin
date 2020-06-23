import React from 'react';
import './App.css';
import './assets/css/landing-page.min.css'
import {Switch, Route,} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Footer from './Components/Footer'
export default function App(){
  return(
    <div>
      <Switch>
        <Route path='/signup'>
          <Login></Login>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
      <Footer/>
    </div>
    );
}  
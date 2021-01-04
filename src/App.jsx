import React from 'react'
import Login from './Login'
import Navbar from './Navbar'
import Home from './Home'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Switch,Route } from 'react-router-dom';
import UserLanding from './UserLanding/UserLanding'

const App = ()=>{
  return(
    <>
      {/* <Navbar/>
      <Login /> */}
      <UserLanding />
    </>
  );
}
export default App;
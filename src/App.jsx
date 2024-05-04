import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import WhoYouAre from './main/Whoyouare';
import Influencerfeed from './main/Influencerfeed';
import Founderfeed from './main/Founderfeed';
import EditInfluencer from './main/EditInfluencer';
import EditFounder from './main/EditFounder';
import Home from './main/Home';
import Login from './auth/Login';
import Signup from './auth/Signup';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Navbar/>}/>
          <Route exact path='/whoyouare' element={<WhoYouAre/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/influencer-feed' element={<Influencerfeed/>}/>
          <Route exact path='/founder-feed' element={<Founderfeed/>}/>
          <Route exact path="/influencer-feed/add" element={<EditInfluencer/>}/>
          <Route exact path="/founder-feed/add" element={<EditFounder/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </>
  );
}

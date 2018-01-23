import React, { Component } from 'react';

import './App.css';
import NavBarComponent from './Components/NavBarComponent';
import AboutUsComponent from './Components/AboutUsComponent';
import BearerComponent from './Components/BearerComponent';
import FooterComponent from './Components/FooterComponent';
import ScrollComponent from './Components/ScrollComponent';
import Names from './data/names';
class App extends Component {
  render() {
    return (
      <div>
      <NavBarComponent title = "The Chemists & Druggists Association" 
      tag = "(Affliated to Tamilnadu Chemists & Druggists Association & AIOCD)"
      stepIn = "Step In for More Info"/>
      <AboutUsComponent/> 
      <BearerComponent sectionname = "Office Bearers" name = {Names.OfficeBearerNames}/>
      <BearerComponent sectionname = "Advisors" name = {Names.Advisors}/>
      <FooterComponent/>
      </div>   
    );
  }
}

export default App;

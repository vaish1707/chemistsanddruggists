import React, { Component } from 'react';

import './App.css';
import NavBarComponent from './Components/NavBarComponent';
import AboutUsComponent from './Components/AboutUsComponent';
import BearerComponent from './Components/BearerComponent';
import FooterComponent from './Components/FooterComponent';

const OfficeBearerNames = [{
  bearer :"ABC",
  desc : "desc111111"},{bearer : "XYZ",desc: "desc222222"},{
    bearer :"ABC",
    desc : "desc111111"},{bearer : "XYZ",desc: "desc222222"},{
      bearer :"ABC",
      desc : "desc111111"},{bearer : "XYZ",desc: "desc222222"},{
        bearer :"ABC",
        desc : "desc111111"},{bearer : "XYZ",desc: "desc222222"},{
          bearer :"ABC",
          desc : "desc111111"},{bearer : "XYZ",desc: "desc222222"}];

  const OfficeBearerNames2 = [{
    bearer :"ABC",
    desc : "desc111111"},{bearer : "XYZ",desc: "desc222222"},{
      bearer :"ABC",
      desc : "desc111111"},{bearer : "XYZ",desc: "desc222222"},{
        bearer :"ABC",
        desc : "desc111111"},{bearer : "XYZ",desc: "desc222222"},{
          bearer :"ABC",
          desc : "desc111111"},{bearer : "XYZ",desc: "desc222222"},{
            bearer :"ABC",
            desc : "desc111111"},{bearer : "XYZ",desc: "desc222222"}];
  
    const OfficeBearerNames3 = [{
      bearer :"ABC",
      desc : "desc111111"},{bearer : "XYZ",desc: "desc222222"},{
        bearer :"ABC",
        desc : "desc111111"},{bearer : "XYZ",desc: "desc222222"},{
          bearer :"ABC",
          desc : "desc111111"},{bearer : "XYZ",desc: "desc222222"},{
            bearer :"ABC",
            desc : "desc111111"},{bearer : "XYZ",desc: "desc222222"},{
              bearer :"ABC",
              desc : "desc111111"},{bearer : "XYZ",desc: "desc222222"}];

class App extends Component {
  render() {
    return (
      <div>
      <NavBarComponent title = "The Chemists & Druggists Association" 
      tag = "Improving medication use and patients care"
      stepIn = "Step In for More Info"/>
      <AboutUsComponent/> 
      <BearerComponent sectionname = "Office Bearers" name = {OfficeBearerNames}/>
      <BearerComponent sectionname = "Office Bearers2" name = {OfficeBearerNames2}/>
      <BearerComponent sectionname = "Office Bearers3" name = {OfficeBearerNames3}/>
      <FooterComponent/>
      </div>   
    );
  }
}

export default App;

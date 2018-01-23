import React, { Component } from 'react';

import './App.css';
import NavBarComponent from './Components/NavBarComponent';
import AboutUsComponent from './Components/AboutUsComponent';
import BearerComponent from './Components/BearerComponent';
import FooterComponent from './Components/FooterComponent';

const OfficeBearerNames = [{
  bearer :"W.S. Mohan Kumar",
  desc : "President"},{bearer : "T.Natarajan",desc: "General Secretary"},{
    bearer :"P.Thirulogachandar",
    desc : "Treasurer"},{bearer : "J.Vijayan",desc: "Vice President"},{
      bearer :"Balasubramaniam (Tvt)",
      desc : "Vice President"},{bearer : "Bhaktachalam",desc: "Vice President"},
      {bearer : "Sudhakar (GTPT)",desc: "Vice President"},{
        bearer :"Periyakaruppan",
        desc : "Vice President"},{bearer : "Thiruselvam",desc: "Vice President"},{
          bearer :"Sai Nathan",
          desc : "Joint Secretary"},{bearer : "Palaniappan",desc: "Joint Secretary"},{
            bearer :"Stalin",
            desc : "Joint Secretary"},{bearer : "Venkatavardhan",desc: "Joint Secretary"},{
              bearer :"Gnanavel Murugan",
              desc : "Joint Secretary"},{bearer : "Jagan",desc: "Joint Secretary"},
              {
                bearer :"Jeevanathan",
                desc : "Organisation Secretary"},{bearer : "G. Thiyagarajan",desc: "Administration Secretary"},{
                  bearer :"V. Sakthivelan",
                  desc : "Chairman,Co-ordination Committee"},{bearer : "Srinivasan",desc: "Chairman,Constitution Committee"},{
                    bearer :"G.Krishnan",
                    desc : "Chairman, Retailwing"},{bearer : "Marudai Periyasamy",desc: "Chairman, Wholesalewing"},{
                      bearer :"S.A.Ramesh",
                      desc : "Chairman, Trade & Industry Relation"},{bearer : "A.O.Selvam",desc: "Secretary, Company affairs"},{
                        bearer :"K.A.Prem Kumar",
                        desc : "Chairman, Trade Reform Committee"}];

  
    const Advisors = [{
      bearer :"M. ArulKumar",
      desc : ""},{bearer : "C.Dinakaran",desc: ""},{
        bearer :"Elumalai",
        desc : ""},{bearer : "Shankar Gupta",desc: ""},{
          bearer :"Srinivasan",
          desc : ""}];

class App extends Component {

  render() {
    return (
      <div>
      <NavBarComponent title = "The Chemists & Druggists Association" 
      tag = "(Affliated to Tamilnadu Chemists & Druggists Association & AIOCD)"
      stepIn = "Step In for More Info"/>
      <AboutUsComponent/> 
      <BearerComponent sectionname = "Office Bearers" name = {OfficeBearerNames}/>
      <BearerComponent sectionname = "Advisors" name = {Advisors}/>
      <FooterComponent/>
      </div>   
    );
  }
}

export default App;

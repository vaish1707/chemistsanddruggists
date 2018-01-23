import React, { Component } from 'react';

import './App.css';
import NavBarComponent from './Components/NavBarComponent';
import AboutUsComponent from './Components/AboutUsComponent';
import BearerComponent from './Components/BearerComponent';
import FooterComponent from './Components/FooterComponent';
import ScrollComponent from './Components/ScrollComponent';
const OfficeBearerNames = [{
  bearer: "ABC",
  desc: "desc111111"
}, { bearer: "XYZ", desc: "desc222222" }, {
  bearer: "ABC",
  desc: "desc111111"
}, { bearer: "XYZ", desc: "desc222222" }, {
  bearer: "ABC",
  desc: "desc111111"
}, { bearer: "XYZ", desc: "desc222222" }, {
  bearer: "ABC",
  desc: "desc111111"
}, { bearer: "XYZ", desc: "desc222222" }, {
  bearer: "ABC",
  desc: "desc111111"
}, { bearer: "XYZ", desc: "desc222222" }];

const OfficeBearerNames2 = [{
  bearer: "ABC",
  desc: "desc111111"
}, { bearer: "XYZ", desc: "desc222222" }, {
  bearer: "ABC",
  desc: "desc111111"
}, { bearer: "XYZ", desc: "desc222222" }, {
  bearer: "ABC",
  desc: "desc111111"
}, { bearer: "XYZ", desc: "desc222222" }, {
  bearer: "ABC",
  desc: "desc111111"
}, { bearer: "XYZ", desc: "desc222222" }, {
  bearer: "ABC",
  desc: "desc111111"
}, { bearer: "XYZ", desc: "desc222222" }];

const OfficeBearerNames3 = [{
  bearer: "ABC",
  desc: "desc111111"
}, { bearer: "XYZ", desc: "desc222222" }, {
  bearer: "ABC",
  desc: "desc111111"
}, { bearer: "XYZ", desc: "desc222222" }, {
  bearer: "ABC",
  desc: "desc111111"
}, { bearer: "XYZ", desc: "desc222222" }, {
  bearer: "ABC",
  desc: "desc111111"
}, { bearer: "XYZ", desc: "desc222222" }, {
  bearer: "ABC",
  desc: "desc111111"
}, { bearer: "XYZ", desc: "desc222222" }];

class App extends Component {
  render() {
    return (
      <div>
        <ScrollComponent />
      </div>
    );
  }
}

export default App;

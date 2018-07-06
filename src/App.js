import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <SayFullName name="Oleh" surname="Cambel" greeting="Hi!" link="#" />
        <SayFullName name="Jonah" surname="Benne" greeting="Bye guys." link="#" />
        <SayFullName name="Shiva" surname="Len" greeting="Connichiwa," link="#" />
      </div>
    );
  }
}

function SayFullName(props) {
  return (
    <div>
      <h1> {props.greeting} I'm {props.name} {props.surname} </h1>
      <p>Down below you can get in contact with me 👇</p>
      <a href={props.link}> Link on my profile </a>
    </div>
  )
}


export default App;

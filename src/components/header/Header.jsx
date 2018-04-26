import React, { Component } from "react";
import StyledHeader from "./Nav";
import injectSheet, { jss, ThemeProvider } from 'react-jss';

export default class Header extends Component {
  render() {
    return (
      
      <header>
        <StyledHeader />
      </header>
    
    );
  }
}


/*<h1 className={classes.title}>Test</h1>*/
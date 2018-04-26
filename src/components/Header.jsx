import React, { Component } from "react";
import { Button, Logo } from "./Button";
import logo from './pic/wisemedia_logo.svg';
import injectSheet, { jss, ThemeProvider } from 'react-jss';
import { Container, Row } from "./Wrapper";
import { Link } from 'react-router-dom';


const style = themes => ({
  btn: {
    "text-decoration": 'none',
    display: 'inline-block',
    float: 'left',
    margin: '0 0 0 60px',
    font: {
      size: '20px',
      weight: '600'
    },
    "&:hover": { "text-decoration": 'none' },
    "&:after": {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: '2px',
      left: '0',
      width: '0',
      height: '0px',
      "background-color": 'black',
      transition: {
        property: 'width',
        duration: '250ms',
        "timing-function": 'initial',
        delay: 'initial',
      },
      "&:hover": { "text-decoration": 'none', height: '4px' }
    }
  },
  logo: {
    width: '170px',
    height: '28px',
    top: '0',
    left: '50%',
    margin: {
      left: '-85px',
    }
  },
  test: {
    "first-child": {
      margin: '0'
  }}
});

const Nav = ({ classes }) => (
  <Container>
    <Row>
      <Link to="/work" className={classes.btn} >Work</Link>
      <Link to="/project" className={classes.btn}>Projects § Technologies</Link>
      <Link to="/about" className={classes.btn}>About us</Link>
      <Link to="/contact" className={classes.btn}>contact</Link>
    </Row>
    <Row>
      <Link to="/"><img className={classes.logo} src={logo} /></Link>
    </Row>
  </Container>
);
const StyledNav = injectSheet(style)(Nav);

const theme = {
  background: "#f7df1a",
  color: "#393e3f"
};

const Header = () => (
  <ThemeProvider theme={theme}>
    <header>
      <StyledNav />
    </header>
  </ThemeProvider>
);

export default Header
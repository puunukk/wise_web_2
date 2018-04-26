import React, { Component } from "react";
import { Button, Logo } from "../Button";
import logo from '../pic/wisemedia_logo.svg';
import injectSheet, { jss, ThemeProvider } from 'react-jss';
import { Container, Row } from "../Wrapper";
import { Link } from 'react-router-dom';


const style = themes => ({
  title: { 
    font: { 
      size: 40, 
      weight: 900 
    }, 
    color: "#24292a",
    "&:hover": { opacity: 0.5 }
  },
});

const Nav = ({ classes }) => (
  <Container>
    <Row>
      <Button><Link to="/work">Work</Link></Button>
      <Button><Link to="/project">Projects § Technologies</Link></Button>
      <Button><Link to="/about">About us</Link></Button>
      <Button><Link to="/contact">contact</Link></Button>
    </Row>
    <Row>
      <h1 className={classes.title}>Hello React-JSS!</h1>
      <Button><Link to="/"><img className='logo' src={logo} /></Link></Button>
    </Row>
  </Container>
);
const StyledNav = injectSheet(style)(Nav);

const theme = {
  background: "#f7df1a",
  color: "#24292a"
};

const StyledHeader = () => (
  <ThemeProvider theme={theme}>
    <StyledNav />
  </ThemeProvider>
);

export default StyledHeader
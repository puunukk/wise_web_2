import React, { Component } from "react";
import logo from "./pic/wisemedia_logo.svg";
import { Link } from 'react-router-dom';

export class Nupp extends Component {
  render() {
    return (
      <Link to={ this.props } className="btn">
        { this.props.children }
      </Link>
    );
  }
}

export class Logo extends Component {
  render() {
    return (
        <img src={logo} alt="Wisemedia white" />
    );
  }
}

export class Button extends Component {
  render() {
    return(
      <div className="btn">
        { this.props.children }
      </div>
    );
  }
}

export class PrimaryButton extends Component {
  render() {
    return (
      <Button className="btn btn-primary">
        {this.props.children}
      </Button>
    );
  }
}
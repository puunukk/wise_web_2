import React from 'react';
import Header from './components/header/Header';
import Main from './views/Main';

export class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

import React from 'react';

export default class Header extends React.Component  {
  render() {
    return (
      <header className="well">
         <img src="././img/logo.png" alt="logo"/>
         <p className="text-center">React App that lets you search through Youtube Videos</p>
      </header>
    );
  }
}

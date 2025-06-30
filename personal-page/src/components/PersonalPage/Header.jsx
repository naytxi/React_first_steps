import React, { Component } from 'react';

const Header = () => {
  return (
    <div className='header'>
      <h2 className='tittle'>NAY</h2>
      <nav className='nav'>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#skills'>Skills</a>
        <a href='#jobs'>Jobs</a>
      </nav>
    </div>
  );
};

export default Header;
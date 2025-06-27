import React, { Component } from 'react';

const Home = (props) => {
  return (
    <div>
      <span>Name: {props.name}</span><br />
      <span>Surname: {props.surname}</span><br />
      <span>Age: {props.age}</span><br />
      <span>About me: {props.about}</span><br />
      <span>Skills: {props.skills}</span><br />
       <span>Jobs: {props.jobs}</span><br />
    </div>
  );
};

export default Home;
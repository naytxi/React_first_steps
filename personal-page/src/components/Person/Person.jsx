import React, { Component } from 'react';

const Person = (props) => {
  return (
    <div>
      <span>Name: {props.name}</span><br />
      <span>Surname: {props.surname}</span><br />
      <span>Age: {props.age}</span>
    </div>
  );
};

class PersonClass extends Component {
  render() {
    return (
      <div>
        <span>Name: {this.props.name}</span><br />
        <span>Surname: {this.props.surname}</span><br />
        <span>Age: {this.props.age}</span>
      </div>
    );
  }
}

export default Person;

export { PersonClass };
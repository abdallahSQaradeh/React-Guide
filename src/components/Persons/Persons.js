import React, { Component, PureComponent } from "react";
import Person from "./Person/Person";
class Persons extends PureComponent {
  // * static getDerivedStateFromProps(props, state) {
  // *   console.log("[Persons.js]  getDerivedFromState");
  // *   return state;
  // * }
  //ToDo shouldComponentUpdate(nextProps, nextState) {
  //ToDo   console.log("[Persons.js]  shouldComponentUpdate");
  //ToDo   // ! if you want to check all props then you should extends your class from PureComponent
  //ToDo   if (
  //ToDo     nextProps.persons !== this.props.persons ||
  //ToDo     nextProps.click !== this.props.click ||
  //ToDo     nextProps.changed !== this.props.changed
  //ToDo   ) {
  //ToDo     return true;
  //ToDo   }
  //ToDo   return false;
  //ToDo }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js]  getSnapshotBeforeUpdate");
    return { Message: "SnapShot!" };
  }
  render() {
    console.log("[Persons.js] Rendering...");

    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={index}
          name={person.name}
          age={person.age}
          click={() => this.props.delete(index)}
          changed={(event) => this.props.change(event, person.id)}
        />
      );
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot.Message);
  }
  componentWillUnmount() {
    console.log("[PErsons.js] componentWillUnmount");
  }
}

export default Persons;

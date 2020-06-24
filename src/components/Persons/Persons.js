import React, { Component } from "react";
import Person from "./Person/Person";
class Persons extends Component {
  // * static getDerivedStateFromProps(props, state) {
  // *   console.log("[Persons.js]  getDerivedFromState");
  // *   return state;
  // * }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js]  shouldComponentUpdate");
    if (nextProps.persons !== this.props.persons) {
      return true;
    }
    return false;
  }
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

import React, { Component, PureComponent } from "react";
import Person from "./Person/Person";
import SimplePerson from "./Person/SimplePerson";
import * as actionTypes from "../../store/actions";
import AddPerson from "../AddPerson/AddPerson";
import { connect } from "react-redux";
import AuthContext from "../../context/auth-context";
const a = [];

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
    console.log(this.props.prs);
    return (
      /* {<AuthContext.Consumer>
        {/* //ToDo : does not take jsx code as child, but insted it takes a function , However we don't need AuthContext to be here, cause we concern with Person not Persons so we'll Remove it from here}
        {(context) =>*/
      <div>
        <AddPerson personAdded={this.props.onAddPersonHandler} />
        {this.props.prs.map((person) => {
          return (
            <SimplePerson
              key={person.id}
              name={person.name}
              age={person.age}
              clicked={() => this.props.onRemovePersonHadler(person.id)}
            />
          );

          // <Person
          //   key={person.id}
          //   name={person.name}
          //   age={person.age}
          //   click={() => this.props.onRemovePersonHadler(person.id)}
          //   changed={(event) => this.props.change(event, person.id)}
          //   isAuth={this.props.isAuthenticated}
          // />
        })}
      </div>
    );
    //   }
    // </AuthContext.Consumer>
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot.Message);
  }
  componentWillUnmount() {
    console.log("[PErsons.js] componentWillUnmount");
  }
}

const mapStateToProps = (state) => {
  return { prs: state.persons };
};
const mapDispatchToProps = (dispatch) => ({
  onAddPersonHandler: (name, age) =>
    dispatch({
      type: actionTypes.ADD_PERSON,
      personData: {
        name: name,
        age: age,
      },
    }),
  onRemovePersonHadler: (id) =>
    dispatch({ type: actionTypes.REMOVE_PERSON, pid: id }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Persons);

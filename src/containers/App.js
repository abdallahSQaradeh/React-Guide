import React, { useState, Component } from "react"; //react Hooks its about useSomeThing that add functionality to functional component
import classes from "./App.css";
import Person from "../components/Persons/Person/Person";
import Radium, { StyleRoot } from "radium";
import styled from "styled-components";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
const StyledButton = styled.button`
background-color: ${(props) => (props.alt ? "red" : "green")};
 font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  color: white;
  &:hover{
    backround-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
    color: black;
    `;
class App extends Component {
  //if you use this here it will turn to error cause it doesn't point to the class

  constructor(props) {
    super(props);
    console.log("[App.js] Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps");
    return state;
  }
  // * don't add parantheses() to where you call your function, cause react will call it imediatly when it render if you do that
  state = {
    persons: [
      { name: "MAx", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
    showPersons: false,
    showCockpit: true,
  }; // * useState : return ana arraywith exactly two element
  // * first element : current state
  // *second element : it is a function that allows us to updatae this state

  //jsx must have one root element not more that

  switchNameHAndler = (newNAme) => {
    //console.log("was clicked");
    // dont do this : this.state.persons[0] = "Maximilian";
    this.setState({
      persons: [
        { name: newNAme, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 },
      ],
    }); //this replaces the old state not merge it like a class extends component
  };
  //there are two ways to pass parameter to function
  //first: use functionNsme.bind(this , parameters)
  //second: return arrowfunction ()=>functionName(parameters)

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };
  deletePErsonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };
  render() {
    console.log("[App.js] Render");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            delete={this.deletePErsonHandler}
            change={this.nameChangedHandler}
            persons={this.state.persons}
          />
        </div>
      );
    }

    return (
      //<StyleRoot>
      <div className={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            toggle={this.togglePersonsHandler}
            personsLength={this.state.persons.length}
            show={this.state.showPersons}
          />
        ) : null}
        {persons}
      </div>
    );
  }
  /*
   * return React.createElement(
   *   "div",
   *   null,
   *   React.createElement("h1", { className: "App" }, "Does this work now")
   *  );
   
  ! Deleted
  !componentWillMount() { 
  !  console.log("[App.js] ComponentWillMount");
  !}
  */
  componentDidMount() {
    console.log("[App.js] ComponentDidMount");
  }
  shouldComponentUpdate() {
    console.log("[App.js]  shouldComponentUpdate");
    return true;
  }
  componentDidUpdate() {
    console.log("[App.js]  componentDidUpdate");
  }
}

export default App;

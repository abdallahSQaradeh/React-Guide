import React, { Component } from "react";
import classes from "./Person.css";
import Radium from "radium";
import styled from "styled-components";
import Aux from "../../../hoc/Auxiliary";

class Person extends Component {
  // !const random = Math.random();
  // !if (random > 0.7) {
  // !  throw new Error("some thing went wrong");
  // !}
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Person.js]  shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Person.js]  getSnapshotBeforeUpdate");
    return null;
  }
  StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (max-width: 700px) {
      width: 300px;
    }
  `;
  //props: to pass property from the line calling

  //we wrap <p> with div to allow take children of line calling
  style = {
    "@media (max-width:700px)": {
      width: "300px",
    },
  };
  render() {
    console.log("[Person.js] Render");
    return (
      <Aux>
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and i am {this.props.age} !years old
        </p>
        <p key="i2">{this.props.children}</p>,
        <input
          key="i3"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
  componentDidUpdate() {
    console.log("[Person.js] componentDidUpdate");
  }
}
export default Person;
// ? export default Radium(person);
// ! for sudo css Wrap Person with Radium is enough, However for
// ! animation or transformation or even media query this isn't enought
// * so we need to wrap our project with special Radium component
///

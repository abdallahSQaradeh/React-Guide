import React, { Component, Fragment } from "react";
import classes from "./Person.css";
import Radium from "radium";
import styled from "styled-components";
import Aux from "../../../hoc/Auxiliary";
import withClassV2 from "../../../hoc/withClassV2";
import PropTypes from "prop-types";
class Person extends Component {
  // !const random = Math.random();
  // !if (random > 0.7) {
  // !  throw new Error("some thing went wrong");
  // !}
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
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
        {/*Also same to Aux you can use <Fragment></Fragment> */}
        {this.props.isAuth ? <p>Authenticated</p> : <p>Please login</p>}
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and i am {this.props.age} !years old
        </p>
        <p key="i2">{this.props.children}</p>,
        <input
          key="i3"
          type="text"
          //? ref={(inpuElement) => {
          //?   inpuElement.focus();
          //? }}

          //ToDo ref={(inp) => {
          //ToDo   this.inputElementRefv = inp;
          //ToDo }}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
  componentDidMount() {
    //? document.querySelector("input").focus();
    //ToDo this.inputElementRefv.focus();
    this.inputElementRef.current.focus();
  }
  componentDidUpdate() {
    console.log("[Person.js] componentDidUpdate");
  }
}

//this allow you to warn people if the props that passed is different of type from that its except
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};
export default withClassV2(Person, classes.Person);
// ? export default Radium(person);
// ! for sudo css Wrap Person with Radium is enough, However for
// ! animation or transformation or even media query this isn't enought
// * so we need to wrap our project with special Radium component
///

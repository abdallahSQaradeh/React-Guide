import React, { useEffect } from "react";
import classes from "./Cockpit.css";
const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpi.js] useEffect");
    setTimeout(() => {
      alert("saved data into cloud");
    }, 1000);
    return () => {
      // *this returns before the main useEffect function but after the first render cycle
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);
  // ? use effect can recive two parameters the first one is
  // ?function to do when use effect called, the second argument
  // ? is to determine which specific change that should trigger useEffect which is array, and empty array let useEffect  to trigger only on the first time of render
  // ToDo : useEffect will excecute on every render of cockpit
  // ToDo: we do everything that doing in componentDidUpdate .. HttpReques ..
  //*useEffect =  componentDidMount + componentDidUpdate

  useEffect(() => {
    console.log("[Cockpit.js] second useEffect");
    return () => {
      console.log("[Cockpit.js] clean up work in  second useEffect");
    };
  });
  let btnClass = "";
  let assignClasses = [];
  if (props.persons.length <= 2) {
    assignClasses.push(classes.red); //classes = ['red]
  }
  if (props.persons.length <= 1) {
    assignClasses.push(classes.bold);
  }
  if (props.show) {
    btnClass = classes.Red;
  }
  return (
    <div className={classes.Cockpit}>
      <h1> {props.title} </h1>
      <p className={assignClasses.join(" ")}>this is really working</p>
      <button onClick={props.toggle} className={btnClass}>
        Toggle persons
      </button>
    </div>
  );
};

export default Cockpit;

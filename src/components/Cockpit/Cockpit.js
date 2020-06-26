import React, { useEffect, memo, useRef } from "react";
import classes from "./Cockpit.css";
const Cockpit = (props) => {
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    console.log("[Cockpi.js] useEffect");
    let timer = setTimeout(() => {
      alert("saved data into cloud");
    }, 1000);
    toggleButtonRef.current.click(); //* we use toggleButtonRef here because
    //*it get defined after rendered te jsx so this help us to avoid Errors

    return () => {
      //clearTimeout(timer);
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
  if (props.personsLength <= 2) {
    assignClasses.push(classes.red); //classes = ['red]
  }
  if (props.personsLength <= 1) {
    assignClasses.push(classes.bold);
  }
  if (props.show) {
    btnClass = classes.Red;
  }
  return (
    <div className={classes.Cockpit}>
      <h1> {props.title} </h1>
      <p className={assignClasses.join(" ")}>this is really working</p>
      <button ref={toggleButtonRef} onClick={props.toggle} className={btnClass}>
        Toggle persons
      </button>
    </div>
  );
};

export default memo(Cockpit);
//memo(only for functional component) : React will store a snapshot  of this component, only if its input xhanges it will rerender it , else if its input does not change and some parent component wants to update this component react will give back the stored component

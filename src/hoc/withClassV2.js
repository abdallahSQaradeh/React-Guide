import React from "react";
const withClassV2 = (WrappedComponent, className) => {
  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent />
      </div>
    );
  };
};
export default withClassV2;

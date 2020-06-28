import React from "react";

//it is golably available in way you make it available
const authContext = React.createContext({
  authenticated: false,
  login: () => {},
});
export default authContext;

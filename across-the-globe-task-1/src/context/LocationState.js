import React, { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

const LocationContext = createContext();

const LocationState = (props) => {
  const location = useLocation();

  const [path, setPath] = useState(location.pathname);
  const [loggedIn, setLoggedIn] = useState(path === "/" ? false : true);

  return (
    <>
      <LocationContext.Provider
        value={{ path, setPath, loggedIn, setLoggedIn }}
      >
        {props.children}
      </LocationContext.Provider>
    </>
  );
};

export default LocationState;
export { LocationContext };

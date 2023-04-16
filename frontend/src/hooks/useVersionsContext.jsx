import React, { useContext } from "react";
import {VersionsContext} from "../context/VersionsContext";

const useVersionsContext = () => {
  const context = useContext(VersionsContext);

  if (!context) {
    throw Error("useVersionsContext must be inside BlogsContextProvider");
  }

  return context;
};

export default useVersionsContext;

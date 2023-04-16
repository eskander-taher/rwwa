import axios from "axios";
import React, { createContext, useReducer } from "react";
import FileDownload from "js-file-download";
export const VersionsContext = createContext();

export const versionsActions = {
  SET_VERSIONS: "SET_VERSIONS",
  ADD_VERSION: "ADD_VERSION",
  DELETE_VERSION: "DELETE_VERSION",
};

export const VersionsReducer = (state, action) => {
  console.log(action.payload, 6543);
  switch (action.type) {
    case versionsActions.SET_VERSIONS:
      return {
        ...state,
        versions: action.payload,
      };
    case versionsActions.ADD_VERSION:
      return {
        ...state,
        versions: [...state.veriosns, action.payload],
      };
    case versionsActions.DELETE_VERSION:
      return {
        ...state,
        versions: state.veriosns.filter(
          (version) => version.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export const VersionsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(VersionsReducer, {
    versions: [],
  });

  const downloadMagazine = async (fileName) => {
    const response = await axios({
      method: "GET",
      url: `http://localhost:5000/api/magazines/download/${fileName}`,
      responseType: "blob",
    });

    FileDownload(response.data, fileName);
  };

  const contextData = {
    versions: state.versions,
    versionsDispatch: dispatch,
    downloadMagazine,
  };

  return (
    <VersionsContext.Provider value={contextData}>
      {children}
    </VersionsContext.Provider>
  );
};

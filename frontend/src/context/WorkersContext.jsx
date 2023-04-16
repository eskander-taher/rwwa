import React, { createContext, useReducer } from "react";

export const WorkersContext = createContext();

export const workersActions = {
  SET_WORKERS: "SET_WORKERS",
  ADD_WORKER: "ADD_WORKER",
  DELETE_WORKER: "DELETE_WORKER",
  UPDATE_WORKER: "UPDATE_WORKER",
};

export const workersReducer = (state, action) => {
  switch (action.type) {
    case workersActions.SET_WORKERS:
      console.log(action.payload);
      return {
        ...state,
        workers: action.payload,
      };
    case workersActions.ADD_WORKER:
      return {
        ...state,
        workers: [...state.workers, action.payload],
      };
    case workersActions.UPDATE_WORKER:
      return {
        ...state,
        workers: [...state.workers, action.payload],
      };
    case workersActions.DELETE_WORKER:
      return {
        ...state,
        workers: state.workers.filter(
          (category) => category.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export const WorkersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workersReducer, {
    workers: [],
    workersTypes: ["ادارة", "أعضاء"],
  });

  const contextData = {
    workers: state.workers,
    workersDispatch: dispatch,
  };

  return (
    <WorkersContext.Provider value={contextData}>
      {children}
    </WorkersContext.Provider>
  );
};

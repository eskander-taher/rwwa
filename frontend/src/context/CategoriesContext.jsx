import React, { createContext, useReducer } from "react";
import useHttpRequest from "../hooks/useHttpRequest";
export const CategoriesContext = createContext();

export const categoriesActions = {
  SET_CATEGORIES: "SET_CATEGORIES",
  ADD_CATEGORY: "ADD_CATEGORY",
  DELETE_CATEGORY: "DELETE_CATEGORY",
  UPDATE_CATEGORY: "UPDATE_CATEGORY",
};

export const categoriesReducer = (state, action) => {
  switch (action.type) {
    case categoriesActions.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case categoriesActions.ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case categoriesActions.UPDATE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case categoriesActions.DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export const CategoriesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(categoriesReducer, {
    categories: [],
  });

  const { error, isLoading, sendRequest } = useHttpRequest();

  const contextData = {
    categories: state.categories,
    categoriesDispatch: dispatch,
  };

  return (
    <CategoriesContext.Provider value={contextData}>
      {children}
    </CategoriesContext.Provider>
  );
};

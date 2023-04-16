import { CategoriesContext } from "../context/CategoriesContext";
import { useContext } from "react";

export default function useCategoriesContext() {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw Error("useCategoriesContext must be inside CategoriesContextProvider");
  }
  return context;
}

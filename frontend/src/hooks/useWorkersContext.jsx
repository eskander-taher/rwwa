import { WorkersContext } from "../context/WorkersContext";
import { useContext } from "react";

export default function useWorkersContext() {
  const context = useContext(WorkersContext);
  if (!context) {
    throw Error(
      "useWorkersContext must be inside WorkersContextProvider"
    );
  }
  return context;
}

import { AuthContext } from "../context/Auth/AuthContext";
import { useContext } from "react";

export default function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error(
      "useAuthContext must be inside AuthContextProvider"
    );
  }
  return context;
}

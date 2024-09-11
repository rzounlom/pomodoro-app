import { AppContext } from "../context/AppContext";
import { useContext } from "react";

// Create a custom hook to use the AppContext more easily
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

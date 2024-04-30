// hook.tsx
import { useContext } from "react";
import { AppContext } from "./context";

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within an AppContextProvider');
  }
  return context;
};

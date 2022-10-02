import { createContext, useContext, useReducer } from "react";
import { ActiveStepReducer } from "./ActiveStepReducer";

const activeStepContext = createContext();

export const ActiveStepProvider = ({ children }) => {
  const initialState = {
    openCreateCampaign: false,
    createCampaignActiveStep: 0,
    campaignSettingActiveStep: 0,
  };

  const [activeStepState, activeStepDispatch] = useReducer(
    ActiveStepReducer,
    initialState
  );

  return (
    <activeStepContext.Provider value={{ activeStepState, activeStepDispatch }}>
      {children}
    </activeStepContext.Provider>
  );
};

export const useActiveStepProvider = () => useContext(activeStepContext);

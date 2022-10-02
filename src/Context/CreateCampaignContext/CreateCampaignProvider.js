import { createContext, useContext, useReducer } from "react";
import { createCampaignReducer } from "./CreateCampaignReducer";

const createCampaignContext = createContext();

export const CreateCampaignProvider = ({ children }) => {
  const initialState = {
    name: "",
    image: "",
    startDate: "",
    endDate: "",
    clicks: "",
    budget: 400,
    location: "",
    radius: "",
    platform: "",
  };

  const [createCampaignState, createCampaignDispatch] = useReducer(
    createCampaignReducer,
    initialState
  );

  return (
    <createCampaignContext.Provider
      value={{ createCampaignState, createCampaignDispatch }}
    >
      {children}
    </createCampaignContext.Provider>
  );
};

export const useCreateCampaignProvider = () =>
  useContext(createCampaignContext);

import { createContext, useContext, useReducer } from "react";
import { campaignListReducer } from "./CampaignListReducer";

const campaignListContext = createContext();

export const CampaignListProvider = ({ children }) => {
  const [campaignListState, campaignListDispatch] = useReducer(
    campaignListReducer,
    []
  );

  return (
    <campaignListContext.Provider
      value={{ campaignListState, campaignListDispatch }}
    >
      {children}
    </campaignListContext.Provider>
  );
};

export const useCampaignListProvider = () => useContext(campaignListContext);

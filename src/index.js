import React from "react";
import ReactDOM from "react-dom/client";
import { ActiveStepProvider } from "./Context/ActiveStepContext/ActiveStepProvider";
import { CreateCampaignProvider } from "./Context/CreateCampaignContext/CreateCampaignProvider";
import { CampaignListProvider } from "./Context/CampaignListContext/CampaignListProvider";
import { FilterProvider } from "./Context/FilterContext/FilterProvider";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CampaignListProvider>
      <ActiveStepProvider>
        <CreateCampaignProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </CreateCampaignProvider>
      </ActiveStepProvider>
    </CampaignListProvider>
  </React.StrictMode>
);

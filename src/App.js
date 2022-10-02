import { useEffect } from "react";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Navbar } from "./Components/Navbar/Navbar";
import { Campaign } from "./Pages/Campaign/Campaign";
import { AddNewCampaign } from "./Pages/AddNewCampaign/AddNewCampaign";
import { useActiveStepProvider } from "./Context/ActiveStepContext/ActiveStepProvider";

import "./styles.css";
import { usecampaignListProvider } from "./Context/CampaignListContext/CampaignListProvider";

export default function App() {
  const { activeStepState, activeStepDispatch } = useActiveStepProvider();

  return (
    <div className="App">
      <div className="aside">
        <Sidebar />
      </div>
      <div className="nav">
        <Navbar />
      </div>
      <div className="main">
        {!activeStepState.openCreateCampaign ? (
          <Campaign />
        ) : (
          <AddNewCampaign />
        )}
      </div>
    </div>
  );
}

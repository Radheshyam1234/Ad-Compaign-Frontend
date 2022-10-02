import { useState } from "react";
import Stepper from "react-stepper-horizontal";
import {
  ReadyToGo,
  ToDo,
  ChooseProduct,
  CampaignSettings,
} from "./AddNewCampaignSteps";
import { useActiveStepProvider } from "../../Context/ActiveStepContext/ActiveStepProvider";

import "./AddNewCampaign.css";

export const AddNewCampaign = () => {
  const {
    activeStepState: { createCampaignActiveStep },
  } = useActiveStepProvider();
  return (
    <div className="addCompaign-container">
      <div>
        <div className="flex flex-column">
          <h2>Your Ad campaigns</h2>
          <p style={{ marginTop: "-4px", color: "rgba(0, 0, 0, 0.5)" }}>
            Launch your ads in just 4 easy steps
          </p>
        </div>
      </div>

      <Stepper
        steps={[
          {
            title: "What you want to do",
          },
          { title: "Choose product" },
          { title: "Campaign settings" },
          { title: "Ready to go" },
        ]}
        activeStep={createCampaignActiveStep}
        activeColor="#F29A2E"
        completeColor="#F29A2E"
        defaultColor="#ABB6C5"
        completeBarColor="#F29A2E"
        defaultTitleColor="#ABB5C2"
        completeTitleColor="#000000"
        defaultBarColor="#ABB6C5"
      />

      {createCampaignActiveStep === 0 && <ToDo />}
      {createCampaignActiveStep === 1 && <ChooseProduct />}
      {createCampaignActiveStep === 2 && <CampaignSettings />}
      {createCampaignActiveStep === 3 && <ReadyToGo />}
    </div>
  );
};

// s

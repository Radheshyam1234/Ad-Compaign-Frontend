import { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import { BudgetAndDatesInfo } from "../../../Components/CampaignSettingHelper/BudgetAndDatesInfo";
import { LocationInfo } from "../../../Components/CampaignSettingHelper/LocationInfo";
import { useActiveStepProvider } from "../../../Context/ActiveStepContext/ActiveStepProvider";
import "./Steps.css";

const steps = [
  {
    label: "Budget and dates info",
  },
  {
    label: "Location info",
  },
];

export const CampaignSettings = () => {
  const {
    activeStepState: { campaignSettingActiveStep },
    activeStepDispatch,
  } = useActiveStepProvider();
  const [activeStep, setActiveStep] = useState(0);
  const [isAllField, setIsAllField] = useState(false);
  return (
    <div className="campaign-settings-container flex-column">
      <div className="step-heading">
        Campaign Settings <span>(Step 3 of 4)</span>
      </div>
      <br />

      <Stepper activeStep={campaignSettingActiveStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              {campaignSettingActiveStep === 0 && <BudgetAndDatesInfo />}
              {campaignSettingActiveStep === 1 && (
                <LocationInfo setIsAllField={setIsAllField} />
              )}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      <div className="flex flex-end">
        <button
          className="continue-btn"
          onClick={() => {
            activeStepDispatch({
              type: "INCREASE_CREATE_CAMPAIGN_ACTIVE_STEP",
            });
          }}
          disabled={
            campaignSettingActiveStep === 1 && isAllField ? false : true
          }
        >
          Continue
        </button>
      </div>
    </div>
  );
};

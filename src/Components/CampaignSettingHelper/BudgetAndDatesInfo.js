import { useEffect, useState, useCallback } from "react";
import Slider from "@mui/material/Slider";

import { useActiveStepProvider } from "../../Context/ActiveStepContext/ActiveStepProvider";
import { useCreateCampaignProvider } from "../../Context/CreateCampaignContext/CreateCampaignProvider";
export const BudgetAndDatesInfo = () => {
  const { activeStepDispatch } = useActiveStepProvider();
  const { createCampaignDispatch } = useCreateCampaignProvider();
  const [activeBtn, setActiveBtn] = useState("Lifetime");
  const [budget, setBudget] = useState(0);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  function debounceFun(priceHandler, delay) {
    let timerId;
    return function () {
      let self = this;
      let args = arguments;
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        priceHandler.apply(self, args);
      }, delay);
    };
  }
  const priceHandler = (e) => {
    setBudget(e.target.value);
  };

  const optimizedPriceHandler = useCallback(debounceFun(priceHandler, 500), []);

  useEffect(() => {
    if (budget && startDate && endDate) {
      setTimeout(() => {
        activeStepDispatch({ type: "INCREASE_CAMPAIGN_SETTING_ACTIVE_STEP" });
      }, 1000);
    }
    createCampaignDispatch({ type: "SET_BUDGET", payload: { budget } });
    createCampaignDispatch({ type: "SET_START_DATE", payload: { startDate } });
    createCampaignDispatch({ type: "SET_END_DATE", payload: { endDate } });
  }, [startDate, endDate, budget]);

  return (
    <div className="flex flex-column">
      <p className="secondary-header">Budget Timeline</p>
      <div className="switch-multibutton">
        <div
          className={activeBtn === "Lifetime" ? "active-div" : ""}
          onClick={() => {
            setActiveBtn("Lifetime");
          }}
        >
          Lifetime
        </div>
        <div
          className={activeBtn === "Daily" ? "active-div" : ""}
          onClick={() => {
            setActiveBtn("Daily");
          }}
        >
          Daily
        </div>
      </div>

      <div className="flex w-100 space-between">
        <div className="flex flex-column w-100 mr-10">
          <p>Start date</p>
          <input
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-column w-100  ml-10">
          <p>End date</p>
          <input
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
          />
        </div>
      </div>

      <div>
        <p className="secondary-header">Enter campaign budget</p>
        <Slider
          defaultValue={400}
          min={100}
          max={10000}
          valueLabelDisplay="auto"
          onChange={optimizedPriceHandler}
        />
        <div className="flex space-between range-values">
          <p>100</p>
          <p>1,00,000</p>
        </div>
      </div>
    </div>
  );
};

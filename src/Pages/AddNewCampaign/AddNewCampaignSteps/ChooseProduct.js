import { useState } from "react";
import { ChooseProductBox } from "../../../Components/ChooseProductBox/ChooseProductBox";
import { useActiveStepProvider } from "../../../Context/ActiveStepContext/ActiveStepProvider";
import "./Steps.css";

import { sampleProducts } from "../../../sampleProducts";

export const ChooseProduct = () => {
  const { activeStepDispatch } = useActiveStepProvider();
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <div className=" choose-product-container flex-column">
      <div className="step-heading">
        Choose the product <span>(Step 2 of 4)</span>
      </div>
      <br />
      <div className="flex flex-wrap ">
        {sampleProducts.map((product, index) => {
          return (
            <ChooseProductBox
              product={product}
              index={index}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          );
        })}
      </div>
      <div className="flex flex-end">
        <button
          className="continue-btn"
          onClick={() => {
            activeStepDispatch({
              type: "INCREASE_CREATE_CAMPAIGN_ACTIVE_STEP",
            });
          }}
          disabled={selectedIndex === -1 ? true : false}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

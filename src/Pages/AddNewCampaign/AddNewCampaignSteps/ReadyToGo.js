import { useState } from "react";

import { PreviewProduct } from "../../../Components/PreviewProductBox/PreviewProduct";
import { useActiveStepProvider } from "../../../Context/ActiveStepContext/ActiveStepProvider";

import previewImage1 from "../../../images/previewImage1.jpg";
import previewImage2 from "../../../images/previewImage2.jpg";
import previewImage3 from "../../../images/previewImage3.jpg";
import "./Steps.css";

import { useCreateCampaignProvider } from "../../../Context/CreateCampaignContext/CreateCampaignProvider";
import { addNewCampaign } from "../../../utils/BackendRequests";
import { useCampaignListProvider } from "../../../Context/CampaignListContext/CampaignListProvider";
const description =
  "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts";

const ProductsData = [
  {
    shopName: "Mukund Cake Shop",
    description,
    image: previewImage1,
  },
  {
    shopName: "Mukund Cake Shop",
    description,
    image: previewImage2,
  },
  {
    shopName: "Mukund Cake Shop",
    description,
    image: previewImage3,
  },
  {
    shopName: "Mukund Cake Shop",
    description,
    image: previewImage1,
  },
];

export const ReadyToGo = () => {
  const { activeStepDispatch } = useActiveStepProvider();
  const { createCampaignState } = useCreateCampaignProvider();
  const { campaignListDispatch } = useCampaignListProvider();
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const createCampaignHandler = () => {
    addNewCampaign(createCampaignState, campaignListDispatch);
  };

  return (
    <div className="ready-to-go-container flex-column">
      <div className="step-heading">
        Ready to go <span>(Step 4 of 4)</span>
      </div>
      <br />
      <div className="flex flex-wrap justify-center">
        {ProductsData.map((product, index) => {
          return (
            <PreviewProduct
              product={product}
              key={index}
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
              type: "RESET_ACTIVE_STEP",
            });
            // console.log(createCampaignState);
            createCampaignHandler();
          }}
          disabled={selectedIndex === -1 ? true : false}
        >
          Finish
        </button>
      </div>
    </div>
  );
};

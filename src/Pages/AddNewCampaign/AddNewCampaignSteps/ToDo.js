import { useState } from "react";

import { CampaignTypeBox } from "../../../Components/CampaignTypeBox/CampaignTypeBox";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SystemUpdateOutlinedIcon from "@mui/icons-material/SystemUpdateOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import { useActiveStepProvider } from "../../../Context/ActiveStepContext/ActiveStepProvider";
import "./Steps.css";
const campaignData = [
  {
    name: "Get Leads as call",
    description: "Reach broad audience and get leads through calls",
    platform: "Google",
    icon: <PhoneCallbackIcon />,
  },
  {
    name: "Get Leads as Facebook messages",
    description: "Get more FB messages from Leads",
    platform: "FB",
    icon: <ChatOutlinedIcon />,
  },
  {
    name: "Increase Page followers",
    description: "Encourage customers to follow your page",
    platform: "FB",
    icon: <PersonAddAltOutlinedIcon />,
  },
  {
    name: "Get Customer Leads",
    description: "Encourage customers to take action",
    platform: "FB",
    icon: <GroupOutlinedIcon />,
  },
  {
    name: "Get More youtube view",
    description: "Increase organic views by obtaining user attention",
    platform: "Youtube",
    icon: <RemoveRedEyeOutlinedIcon />,
  },
  {
    name: "Get More website Traffic ",
    description: "Get the right people to visit your website",
    platform: "Instagram",
    icon: <SendOutlinedIcon />,
  },
  {
    name: "Increase Livestore Traffic ",
    description: "Drive visits to local stores, restaurants & Dealerships",
    platform: "Google",
    icon: <StoreOutlinedIcon />,
  },
  {
    name: "Increase your app instals",
    description: "Get more installs, interactions for your app",
    platform: "Youtube",
    icon: <SystemUpdateOutlinedIcon />,
  },
  {
    name: "Increase the catalogue sales ",
    description: "Drive the sales of your catalogue and get more leads",
    platform: "Google",
    icon: <StoreOutlinedIcon />,
  },
];

export const ToDo = () => {
  const { activeStepDispatch } = useActiveStepProvider();
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <div className="todo-container flex-column">
      <div className="step-heading">
        What do you want to do <span>(Step 1 of 4)</span>
      </div>
      <br />
      <div className="flex flex-wrap space-evenly">
        {campaignData.map((campaignInfo, index) => {
          return (
            <CampaignTypeBox
              data={campaignInfo}
              key={campaignInfo.name}
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

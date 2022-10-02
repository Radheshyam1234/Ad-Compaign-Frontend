import { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import { useCreateCampaignProvider } from "../../Context/CreateCampaignContext/CreateCampaignProvider";
import "./Styles.css";

export const LocationInfo = ({ setIsAllField }) => {
  const { createCampaignDispatch } = useCreateCampaignProvider();
  const [activeBtn, setActiveBtn] = useState("Location");
  const [location, setLocation] = useState("");
  const [radius, setRadius] = useState();

  useEffect(() => {
    if (radius || location) setIsAllField(true);
    if (radius) {
      createCampaignDispatch({ type: "SET_RADIUS", payload: { radius } });
    }
    if (location) {
      createCampaignDispatch({ type: "SET_LOCATION", payload: { location } });
    }
  }, [location, radius]);
  return (
    <div className="flex flex-column">
      <p className="secondary-header">Budget Timeline</p>
      <div className="switch-multibutton">
        <div
          className={activeBtn === "Location" ? "active-div" : ""}
          onClick={() => {
            setActiveBtn("Location");
          }}
        >
          Location
        </div>
        <div
          className={activeBtn === "Radius" ? "active-div" : ""}
          onClick={() => {
            setActiveBtn("Radius");
          }}
        >
          Radius
        </div>
      </div>

      {activeBtn === "Location" ? (
        <div className="flex flex-column">
          <p className="secondary-header">Select location</p>
          <input
            type="text"
            placeholder="Select a place name, address or coordinates"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>
      ) : (
        <div>
          <p className="secondary-header">Select target radius</p>
          <Slider
            defaultValue={10}
            min={1}
            max={30}
            valueLabelDisplay="auto"
            onChange={(e) => {
              setRadius(e.target.value);
            }}
          />
          <div className="flex space-between range-values">
            <p>1</p>
            <p>30</p>
          </div>
        </div>
      )}
    </div>
  );
};

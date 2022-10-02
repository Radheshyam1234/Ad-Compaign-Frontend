import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import "./Campaign.css";
import { FilterContainer } from "./FilterContainer";
import { ListContainer } from "./ListContainer";
import { useActiveStepProvider } from "../../Context/ActiveStepContext/ActiveStepProvider";

export const Campaign = () => {
  const { activeStepDispatch } = useActiveStepProvider();
  return (
    <div className="container">
      <div className="container-top-section flex space-between align-center">
        <div className="flex flex-column">
          <h2>Your campaigns</h2>
          <p style={{ marginTop: "0px", color: "rgba(0, 0, 0, 0.5)" }}>
            Check the list of campaigns you created
          </p>
        </div>
        <div>
          <Button
            className="create-btn"
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
            onClick={() => {
              activeStepDispatch({ type: "OPEN_CREATE_CAMPAIGN_CONTAINER" });
            }}
          >
            Create new campaign
          </Button>
        </div>
      </div>
      <div className="campaign-lists-wrapper">
        <div className="campaign-lists-filter">
          <div className="searchBar-wrapper">
            <input type="text" placeholder="Search for the campaign" />
            <SearchIcon className="search-icon" />
          </div>
          <FilterContainer />
        </div>

        <ListContainer />
      </div>
    </div>
  );
};

import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import HomeIcon from "@mui/icons-material/Home";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-icon-wrapper">
          <div className="icon-background flex align-center justify-center">
            <RocketLaunchIcon
              className="lg-icon"
              // style={{ fontSize: "40px" }}
            />
          </div>
        </div>

        <div className="sidebar-links-wrapper">
          <div className="sidebar-link-container ">
            <HomeIcon className="md-icons" />
            <p className="sidebar-link-text">Home</p>
          </div>
        </div>
        <div className="sidebar-links-wrapper">
          <div className="sidebar-link-container active-sidebar-link">
            <VolumeUpIcon className="md-icons" />
            <p className="sidebar-link-text">Campaign</p>
          </div>
        </div>

        <div className="sidebar-links-wrapper">
          <div className="sidebar-link-container">
            <ShoppingCartIcon className="md-icons" />

            <p className="sidebar-link-text">Products</p>
          </div>
        </div>

        <div className="sidebar-links-wrapper">
          <div className="sidebar-link-container">
            <PeopleAltIcon className="md-icons" />
            <p className="sidebar-link-text">Customers</p>
          </div>
        </div>
      </div>
    </>
  );
};

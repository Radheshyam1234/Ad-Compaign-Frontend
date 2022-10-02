import "./Navbar.css";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-left"></div>
      <div className="nav-right">
        <div className="subdcription-text">Free trial ends in 2 days</div>
        <button className="subscription-btn">
          {" "}
          <WorkspacePremiumIcon className="btn-icon" /> Buy Plan
        </button>

        <CardGiftcardOutlinedIcon />
        <NotificationsActiveOutlinedIcon />
        <img
          className="nav-img"
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80"
          alt="profile-img"
        />
        <p>
          Mukund cake shop <ArrowDropDownIcon />
        </p>
      </div>
    </div>
  );
};

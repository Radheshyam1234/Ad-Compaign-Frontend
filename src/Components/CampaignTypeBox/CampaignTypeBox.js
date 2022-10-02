import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useCreateCampaignProvider } from "../../Context/CreateCampaignContext/CreateCampaignProvider";

import "./CampaignTypeBox.css";

export const CampaignTypeBox = ({
  data: { name, description, platform, icon },
  index,
  selectedIndex,
  setSelectedIndex,
}) => {
  // const [isSelected, setIsSelected] = useState(false);
  const { createCampaignDispatch } = useCreateCampaignProvider();

  return (
    <div
      className={
        selectedIndex === index
          ? " box selectedBox flex align-center"
          : "box unselectedBox flex align-center"
      }
      onClick={() => {
        setSelectedIndex(index);
        createCampaignDispatch({
          type: "SET_PLATFORM",
          payload: { platform },
        });
      }}
    >
      <div style={{ color: selectedIndex === index ? "#0F6EFF" : "#8B8B8B" }}>
        {icon}
      </div>

      <div className="flex flex-column ml-10">
        <p className="campaign-name">{name}</p>
        <p className="campaign-desc">{description}</p>
      </div>
      <CheckCircleIcon
        className="check-icon"
        style={{
          color: "#0f6eff",

          display: selectedIndex === index ? "block" : "none",
        }}
      />
    </div>
  );
};

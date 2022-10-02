import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { useCreateCampaignProvider } from "../../Context/CreateCampaignContext/CreateCampaignProvider";
import "./ChooseProductBox.css";
export const ChooseProductBox = ({
  product: { name, image, price },
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
          ? "product-wrapper selected"
          : "product-wrapper unselected"
      }
      onClick={() => {
        setSelectedIndex(index);
        createCampaignDispatch({
          type: "SET_NAME_IMG",
          payload: { name, image },
        });
      }}
    >
      <img className="list-item-img" src={image} alt="Listimage" />

      <div className="flex flex-column ml-10">
        <p className="product-name">{name}</p>
        <p className="product-price">Rs: {price}</p>
      </div>
      {selectedIndex === index ? (
        <CheckCircleIcon
          style={{
            color: "#0f6eff",
          }}
        />
      ) : (
        <CheckCircleOutlinedIcon style={{ color: "#D8D8D8" }} />
      )}
    </div>
  );
};

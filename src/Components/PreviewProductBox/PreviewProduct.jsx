import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./PreviewProduct.css";
export const PreviewProduct = ({
  product: { shopName, description, image },
  index,
  selectedIndex,
  setSelectedIndex,
}) => {
  // const [isSelected, setIsSelected] = useState(false);
  return (
    <div
      className={
        selectedIndex === index
          ? "product-wrapper flex flex-column selected"
          : "product-wrapper flex flex-column"
      }
      onClick={() => {
        setSelectedIndex(index);
      }}
    >
      <div className="product-header flex align-center w-100">
        <Avatar
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          sx={{ width: 40, height: 40 }}
        />
        <div className="flex flex-column ml-10">
          <div>{shopName}</div>
          <div className="secondary-text text-xsmall">Sponsored</div>
        </div>
      </div>
      <div className="product-description mt-10">{description}</div>
      <img src={image} alt="cake-img" className="product-img mt-10" />

      <div
        className="flex space-between align-center w-100 p-5"
        style={{ background: " #F5F5F5" }}
      >
        <div style={{ color: "#2B23A5", fontSize: "11px" }}>{shopName}</div>
        <button className="flex align-center space-between mt-10">
          <ThumbUpOutlinedIcon className="mr-10" /> Like
        </button>
      </div>
      {selectedIndex === index && (
        <CheckCircleIcon className="check-icon" style={{ color: "#0f6eff" }} />
      )}
      {selectedIndex === index && (
        <div className="w-100 flex space-evenly mt-10">
          <button className="primary-btn">Change image</button>
          <button className="primary-btn">Edit text</button>
        </div>
      )}
    </div>
  );
};

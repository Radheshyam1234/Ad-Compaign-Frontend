import { useState } from "react";
import Switch from "react-switch";

export const Toggle = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };
  return (
    <>
      <Switch
        onChange={handleChange}
        checked={checked}
        className="react-switch"
        handleDiameter={20}
        height={23}
        onColor="#0f6eff"
      />
    </>
  );
};

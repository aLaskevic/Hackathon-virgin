import React from "react";

function FilterIcon({ title, image }) {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <img
      onClick={() => setIsActive(!isActive)}
      className={` rounded-full object-cover flex justify-center items-center ${
        isActive ? "" : "filter grayscale"
      }`}
      src={image}
    />
  );
}

export default FilterIcon;

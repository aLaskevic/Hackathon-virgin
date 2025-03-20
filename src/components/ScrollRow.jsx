import React from "react";

function ScrollRow({ children, title, className }) {
  return (
    <div className={`${className}`}>
      {title && <h2 className="text-2xl font-semibold my-4">{title}</h2>}
      <div className="overflow-x-scroll whitespace-nowrap scrollbar-hide flex gap-6">
        {children}
      </div>
    </div>
  );
}

export default ScrollRow;

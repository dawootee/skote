import React from "react";
import "./RiseModal.css";
const RiseModal = ({ children, style, onClose }) => {
  return (
    <>
      <div
        className="backdrop"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      ></div>
      <div className="rise_modal" style={style}>
        {children}
      </div>
    </>
  );
};

export default RiseModal;

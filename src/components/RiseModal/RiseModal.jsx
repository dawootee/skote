import React from "react";
import "./RiseModal.css";
const RiseModal = ({ children, style, onClose, closeOnLeave }) => {
  return (
    <>
      <div
        className="backdrop"
        style={{ display: closeOnLeave ? "none" : "block" }}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        onMouseEnter={(e) => {
          e.stopPropagation();
        }}
      ></div>
      <div className="rise_modal" style={style}>
        {children}
      </div>
    </>
  );
};

export default RiseModal;

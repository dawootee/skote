import React, { useState } from "react";
import "./TreeItem.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const TreeItem = ({ text, Modal, style }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      className="tree_item"
      onMouseEnter={() => setShowModal(true)}
      onMouseLeave={() => setShowModal(false)}
      style={style}
    >
      {showModal && <div className="inner_modal_wrapper">{Modal}</div>}
      <div className="tree_item_text">{text}</div>
      <ArrowForwardIosIcon className="tree_item_arrow" />
    </div>
  );
};

export default TreeItem;

import React from "react";
import "./MiniCard2.css";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const MiniCard = ({ title, icon, price }) => {
  return (
    <div className="db_mini_card2">
      <div className="db_mini_card2header">
        <div className="dbm_card2_badge">{icon}</div>
        <div className="dbmc2_title">{title}</div>
      </div>
      <div className="db_mini_card2body">
        <div className="dbm_card2_price">{price}</div>
        <KeyboardArrowDownRoundedIcon className="dbm_card2_arrow" />
      </div>
      <div className="db_mini_footer">
        <span>+0.2%</span>&nbsp;From Previos peri....
      </div>
    </div>
  );
};

export default MiniCard;

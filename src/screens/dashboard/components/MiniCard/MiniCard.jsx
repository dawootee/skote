import React from "react";
import "./MiniCard.css";

const MiniCard = ({ label, title, icon }) => {
  return (
    <div className="db_mini_card">
      <div className="db_mini_cardleft">
        <div className="dbmc_left_label">{label}</div>
        <div className="dbmc_left_title">{title}</div>
      </div>
      <div className="db_mini_cardright">
        <div className="dbm_cardright_badge">{icon}</div>
      </div>
    </div>
  );
};

export default MiniCard;

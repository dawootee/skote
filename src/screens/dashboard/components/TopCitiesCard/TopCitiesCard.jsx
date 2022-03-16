import React from "react";
import "./TopCitiesCard.css";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const TopCitiesCard = () => {
  return (
    <div className="top_cities_card">
      <div className="top_cities_card_heading">Top Cities Selling Product</div>
      <div className="top_cc_header">
        <FmdGoodOutlinedIcon className="top_cch_icon" />
        <div className="top_cch_title">1,456</div>
        <div className="top_cch_subtitle">San Francisco</div>
      </div>
      <div className="top_cc_body">
        <div className="top_ccb_item">
          <div className="top_ccbi_city">San Francisco</div>
          <div className="top_ccbi_count">1,456</div>
          <div className="top_ccbi_pb">
            <div
              className="top_ccbi_progress"
              style={{ width: "80%", backgroundColor: "#556EE6" }}
            ></div>
          </div>
        </div>
        <div className="top_ccb_item">
          <div className="top_ccbi_city">Los Angeles</div>
          <div className="top_ccbi_count">1,123</div>
          <div className="top_ccbi_pb">
            <div
              className="top_ccbi_progress"
              style={{ width: "75%", backgroundColor: "#34C38F" }}
            ></div>
          </div>
        </div>
        <div className="top_ccb_item">
          <div className="top_ccbi_city">San Diego</div>
          <div className="top_ccbi_count">1,026</div>
          <div className="top_ccbi_pb">
            <div
              className="top_ccbi_progress"
              style={{ width: "60%", backgroundColor: "#F1B44C" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCitiesCard;

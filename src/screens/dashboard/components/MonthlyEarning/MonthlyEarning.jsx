import React from "react";
import "./MonthlyEarning.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import RadialChart from "../../../../components/Charts/RadialChart";

const MonthlyEarning = () => {
  return (
    <div className="monthly_earning_card">
      <div className="monthly_earning_header">Monthly Earning</div>
      <div className="monthly_earning_body">
        <div className="meb_left">
          <div className="meb_left_label">This month</div>
          <div className="meb_left_earning">$34,252</div>
          <div className="meb_left_desc">
            <span className="mebl_desc_highlighted">
              12% <ArrowUpwardIcon style={{ fontSize: "16px" }} />
            </span>
            &nbsp; From Previous period
          </div>
          <div className="mebl_btn">
            <span className="mebl_btn_text">View More</span>
            <ArrowRightAltIcon className="mebl_btn_icon" />
          </div>
        </div>
        <div className="meb_right">
          <RadialChart />
        </div>
      </div>
      <div className="monthly_earning_footer">
        We craft digital, graphic and dimensional thinking.
      </div>
    </div>
  );
};

export default MonthlyEarning;

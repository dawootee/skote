import React from "react";
import "./SaasBanner.css";
import Profile from "../../../../assets/profile.jpeg";
import Settings from "@mui/icons-material/SettingsOutlined";
const SaasBanner = () => {
  return (
    <div className="saas_banner">
      <div className="saas_banner_left">
        <div className="sbl_left">
          <img src={Profile} alt="" />
        </div>
        <div className="sbl_right">
          <div className="sbl_right_label">Welcome to skote dashboard</div>
          <div className="sbl_right_title">Henry Wells</div>
          <div className="sbl_right_subtitle">UI / UX Designer</div>
        </div>
      </div>
      <div className="saas_banner_middle">
        <div className="saas_bm_item">
          <div className="saas_bm_itemtop">Total Projects</div>
          <div className="saas_bm_itembottom">48</div>
        </div>
        <div className="saas_bm_item">
          <div className="saas_bm_itemtop"> Projects</div>
          <div className="saas_bm_itembottom">40</div>
        </div>
        <div className="saas_bm_item">
          <div className="saas_bm_itemtop">Clients</div>
          <div className="saas_bm_itembottom">18</div>
        </div>
      </div>
      <div className="saas_banner_right">
        <div className="sbr_settigns_btn">
          <Settings
            className="sbr_settigns_btnicon"
            style={{ color: "white", fontSize: "16px" }}
          />
          <span className="sbr_settigns_btntxt">Setting</span>
        </div>
      </div>
    </div>
  );
};

export default SaasBanner;

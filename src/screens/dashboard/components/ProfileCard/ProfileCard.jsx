import React from "react";
import "./ProfileCard.css";
import Cover from "../../../../assets/profile-cover.png";
import Profile from "../../../../assets/profile.jpeg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const ProfileCard = () => {
  return (
    <div className="profile_card">
      <div className="profile_card_banner">
        <div className="profile_cb_left">
          <div className="profile_card_heading">Welcome Back !</div>
          <div className="profile_card_subheading">Skote Dashboard</div>
        </div>
        <img
          src={Cover}
          alt=""
          width="35%"
          className="profile_card_coverimage"
        />
      </div>
      <div className="profile_card_body">
        <div className="pcb_profile_image">
          <img src={Profile} alt="" />
        </div>
        <div className="pcb_left">
          <div className="pcb_left_title">Henry Price</div>
          <div className="pcb_left_subtitle">UI/UX Desig...</div>
        </div>
        <div className="pcb_right">
          <div className="pcb_right_top">
            <div className="pcbr_top_left">
              <div className="pcbrt_title">125</div>
              <div className="pcbrt_subtitle">Projects</div>
            </div>
            <div className="pcbr_top_right">
              <div className="pcbrt_title">$1245</div>
              <div className="pcbrt_subtitle">Revenue</div>
            </div>
          </div>
          <div className="pcb_right_bottom">
            <div className="pcbrb_btn">
              <span className="pcbrb_btn_text">View Profile</span>
              <ArrowRightAltIcon className="pcbrb_btn_icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

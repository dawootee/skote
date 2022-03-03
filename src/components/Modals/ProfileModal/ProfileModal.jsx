import React from "react";
import RiseModal from "../../RiseModal/RiseModal";
import "./ProfileModal.css";
import Profile from "@mui/icons-material/AccountCircleRounded";
import Wallet from "@mui/icons-material/AccountBalanceWalletRounded";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import Logout from "@mui/icons-material/ExitToAppRounded";
const ProfileModal = ({ onClose, style }) => {
  return (
    <RiseModal style={style} onClose={onClose}>
      <div className="profile_modal">
        <div className="profile_modal_title">Welcome Peter!</div>
        <div className="profile_modal_item">
          <Profile className="pm_item_icon" />
          <div className="pm_item_text">Profile</div>
        </div>
        <div className="profile_modal_item">
          <Wallet className="pm_item_icon" />
          <div className="pm_item_text">My Wallet</div>
        </div>
        <div className="profile_modal_item">
          <FactCheckRoundedIcon className="pm_item_icon" />
          <div className="pm_item_text">Settings</div>
        </div>
        <div className="profile_modal_item">
          <LockRoundedIcon className="pm_item_icon" />
          <div className="pm_item_text">Lock screen</div>
        </div>
        <hr />
        <div className="profile_modal_item">
          <Logout className="pm_item_icon" />
          <div className="pm_item_text">Logout</div>
        </div>
      </div>
    </RiseModal>
  );
};

export default ProfileModal;

import React, { useState } from "react";
import "./Topbar.css";
import Logo from "../../assets/logo-dark.png";
import Logo2 from "../../assets/logo.svg";
import Flag from "../../assets/flag.jpg";
import Profile from "../../assets/profile.jpeg";
import Search from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Grid from "@mui/icons-material/GridViewOutlined";
import Notifications from "@mui/icons-material/NotificationsNoneOutlined";
import Fullscreen from "@mui/icons-material/FullscreenOutlined";
import Settings from "@mui/icons-material/SettingsOutlined";
import MegaMenu from "../Modals/MegaMenu/MegaMenu";
import CountriesModal from "../Modals/CountriesModal/CountriesModal";
import AppsModal from "../Modals/AppsModal/AppsModal";
import ProfileModal from "../Modals/ProfileModal/ProfileModal";
import SettingsDrawer from "../Modals/SettingsDrawer/SettingsDrawer";
const Topbar = () => {
  const [modal, setModal] = useState(0);
  function launchFullScreen() {
    const element = document.documentElement;
    if (element.requestFullScreen) {
      element.requestFullScreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }
  }
  return (
    <div className="topbar_wrapper">
      <div className="topbar_container">
        <div className="topbar_leftside">
          <img src={Logo} className="topbar_logo" alt="" />

          <div className="topbar_searchbox">
            <Search className="tb_searchbox_icon" />
            <input
              type="text"
              placeholder="Search..."
              className="tb_searchbox_input"
            />
          </div>

          <div className="topbar_selector" onClick={() => setModal(1)}>
            <span className="topbar_selector_text">Mega Menu</span>
            <KeyboardArrowDownIcon className="topbar_selector_icon" />
            {modal === 1 && (
              <MegaMenu
                onClose={() => setModal(0)}
                style={{ top: "50px", left: "50px" }}
              />
            )}
          </div>
        </div>

        <div className="topbar_rightside">
          <div className="topbar_flagbtn_wrap">
            <img
              src={Flag}
              className="topbar_flagbtn"
              alt=""
              onClick={() => {
                setModal(2);
              }}
            />
            {modal === 2 && (
              <CountriesModal
                onClose={() => setModal(0)}
                style={{ top: "30px", left: "-20px" }}
              />
            )}
          </div>

          <div className="topbar_apps">
            <Grid
              className="topbar_filter"
              onClick={() => {
                setModal(3);
              }}
            />
            {modal === 3 && (
              <AppsModal
                onClose={() => setModal(0)}
                style={{ top: "30px", left: "-100px" }}
              />
            )}
          </div>
          <div className="topbar_fullscreen_btn">
            <Fullscreen
              className="topbar_fullscreen"
              onClick={launchFullScreen}
            />
          </div>
          <div className="topbar_notification">
            <div className="tb_notification_badge">2</div>
            <Notifications className="tb_notification_icon" />
          </div>
          <div
            className="topbar_profile"
            onClick={() => {
              setModal(4);
            }}
          >
            {modal === 4 && (
              <ProfileModal
                onClose={() => setModal(0)}
                style={{ top: "30px", left: "0" }}
              />
            )}
            <img src={Profile} alt="" className="tb_profile_image" />
            <div className="tb_profile_selector">
              <div className="tb_profile_selectortext">Admin</div>
              <KeyboardArrowDownIcon className="topbar_selector_icon" />
            </div>
          </div>
          <Settings
            className="topbar_settingbtn"
            onClick={() => {
              setModal(5);
            }}
          />
          <SettingsDrawer show={modal === 5} onClose={() => setModal(0)} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;

import React from "react";
import "./Navbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Home from "@mui/icons-material/HomeRounded";
import ContrastRoundedIcon from "@mui/icons-material/ContrastRounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import CallToActionRoundedIcon from "@mui/icons-material/CallToActionRounded";
import InsertPageBreakRoundedIcon from "@mui/icons-material/InsertPageBreakRounded";

const Navbar = () => {
  return (
    <div className="navbar_wrapper">
      <div className="navbar_container">
        <div className="navbar_item">
          <Home className="navbar_item_icon" />
          <div className="navbar_item_text">Dashboard</div>
          <KeyboardArrowDownIcon className="navbar_item_arrow" />
        </div>
        <div className="navbar_item">
          <ContrastRoundedIcon className="navbar_item_icon" />
          <div className="navbar_item_text">UI Elements</div>
          <KeyboardArrowDownIcon className="navbar_item_arrow" />
        </div>
        <div className="navbar_item">
          <AppsRoundedIcon className="navbar_item_icon" />
          <div className="navbar_item_text">Apps</div>
          <KeyboardArrowDownIcon className="navbar_item_arrow" />
        </div>
        <div className="navbar_item">
          <CallToActionRoundedIcon className="navbar_item_icon" />
          <div className="navbar_item_text">Components</div>
          <KeyboardArrowDownIcon className="navbar_item_arrow" />
        </div>
        <div className="navbar_item">
          <InsertPageBreakRoundedIcon className="navbar_item_icon" />
          <div className="navbar_item_text">Extra Pages</div>
          <KeyboardArrowDownIcon className="navbar_item_arrow" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

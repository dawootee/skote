import React, { useState } from "react";
import "./Navbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Home from "@mui/icons-material/HomeRounded";
import ContrastRoundedIcon from "@mui/icons-material/ContrastRounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import CallToActionRoundedIcon from "@mui/icons-material/CallToActionRounded";
import InsertPageBreakRoundedIcon from "@mui/icons-material/InsertPageBreakRounded";
import DashboardModal from "../Modals/DashboardModal/DashboardModal";
import UIElements from "../Modals/UIElements/UIElements";
import Apps from "../Modals/Apps/Apps";
import ComponentsModal from "../Modals/ComponentsModal/ComponentsModal";
import ExtraPages from "../Modals/ExtraPages/ExtraPages";

const Navbar = () => {
  const [modal, setModal] = useState(0);
  const showModal = (mdl) => {
    setModal(mdl);
  };
  const hideModal = () => {
    setModal(0);
  };
  return (
    <div className="navbar_wrapper">
      <div className="navbar_container">
        <div
          className="navbar_item"
          onMouseEnter={() => showModal(1)}
          onMouseLeave={hideModal}
        >
          {modal === 1 && (
            <DashboardModal
              style={{ top: "50px" }}
              onClose={() => {
                setModal(0);
              }}
              closeOnLeave={true}
            />
          )}
          <Home className="navbar_item_icon" />
          <div className="navbar_item_text">Dashboard</div>
          <KeyboardArrowDownIcon className="navbar_item_arrow" />
        </div>
        <div
          className="navbar_item"
          onMouseEnter={() => showModal(2)}
          onMouseLeave={hideModal}
        >
          {modal === 2 && (
            <UIElements
              style={{ top: "50px" }}
              onClose={() => {
                setModal(0);
              }}
              closeOnLeave={true}
            />
          )}
          <ContrastRoundedIcon className="navbar_item_icon" />
          <div className="navbar_item_text">UI Elements</div>
          <KeyboardArrowDownIcon className="navbar_item_arrow" />
        </div>
        <div
          className="navbar_item"
          onMouseEnter={() => showModal(3)}
          onMouseLeave={hideModal}
        >
          {modal === 3 && (
            <Apps
              style={{ top: "50px" }}
              onClose={() => {
                setModal(0);
              }}
              closeOnLeave={true}
            />
          )}
          <AppsRoundedIcon className="navbar_item_icon" />
          <div className="navbar_item_text">Apps</div>
          <KeyboardArrowDownIcon className="navbar_item_arrow" />
        </div>
        <div
          className="navbar_item"
          onMouseEnter={() => showModal(4)}
          onMouseLeave={hideModal}
        >
          {modal === 4 && (
            <ComponentsModal
              style={{ top: "50px" }}
              onClose={() => {
                setModal(0);
              }}
              closeOnLeave={true}
            />
          )}
          <CallToActionRoundedIcon className="navbar_item_icon" />
          <div className="navbar_item_text">Components</div>
          <KeyboardArrowDownIcon className="navbar_item_arrow" />
        </div>
        <div
          className="navbar_item"
          onMouseEnter={() => showModal(5)}
          onMouseLeave={hideModal}
        >
          {modal === 5 && (
            <ExtraPages
              style={{ top: "50px" }}
              onClose={() => {
                setModal(0);
              }}
              closeOnLeave={true}
            />
          )}
          <InsertPageBreakRoundedIcon className="navbar_item_icon" />
          <div className="navbar_item_text">Extra Pages</div>
          <KeyboardArrowDownIcon className="navbar_item_arrow" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

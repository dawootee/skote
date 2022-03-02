import React from "react";
import RiseModal from "../../RiseModal/RiseModal";
import Image from "../../../assets/mega-menu.png";
import "./MegaMenu.css";

const MegaMenu = ({ style, onClose }) => {
  return (
    <RiseModal style={style} onClose={onClose}>
      <div className="mega_menu">
        <div className="mmenu_box">
          <div className="mmenu_list_heading">UI Components</div>
          <div className="mmenu_list_item">Lightbox</div>
          <div className="mmenu_list_item">Range Slider</div>
          <div className="mmenu_list_item">Sweet Alert</div>
          <div className="mmenu_list_item">Rating</div>
          <div className="mmenu_list_item">Forms</div>
          <div className="mmenu_list_item">Tables</div>
          <div className="mmenu_list_item">Charts</div>
        </div>
        <div className="mmenu_box">
          <div className="mmenu_list_heading">Applications</div>
          <div className="mmenu_list_item">Ecommerce</div>
          <div className="mmenu_list_item">Calender</div>
          <div className="mmenu_list_item">Email</div>
          <div className="mmenu_list_item">Projects</div>
          <div className="mmenu_list_item">Tasks</div>
          <div className="mmenu_list_item">Contacts</div>
        </div>
        <div className="mmenu_box">
          <div className="mmenu_list_heading">Extra Pages</div>
          <div className="mmenu_list_item">Light Sidebar</div>
          <div className="mmenu_list_item">Compact Sidebar</div>
          <div className="mmenu_list_item">Horizontal Layout</div>
          <div className="mmenu_list_item">Maintenance</div>
          <div className="mmenu_list_item">Coming Soon</div>
          <div className="mmenu_list_item">Timeline</div>
          <div className="mmenu_list_item">FAQs</div>
        </div>
        <div className="mmenu_box">
          <div className="mmenu_list_heading">UI Components</div>
          <div className="mmenu_list_item">Lightbox</div>
          <div className="mmenu_list_item">Range Slider</div>
          <div className="mmenu_list_item">Sweet Alert</div>
          <div className="mmenu_list_item">Rating</div>
          <div className="mmenu_list_item">Forms</div>
          <div className="mmenu_list_item">Tables</div>
          <div className="mmenu_list_item">Charts</div>
        </div>

        <div className="mmenu_box">
          <img src={Image} alt="" className="mmenu_image" />
        </div>
      </div>
    </RiseModal>
  );
};

export default MegaMenu;

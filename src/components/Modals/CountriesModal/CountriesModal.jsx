import React from "react";
import RiseModal from "../../RiseModal/RiseModal";
import "./CountriesModal.css";
import Arabic from "../../../assets/arabic.jpg";
import French from "../../../assets/french.jpg";
import Spanish from "../../../assets/spanish.jpg";
import Chinese from "../../../assets/chinese.jpg";
import English from "../../../assets/english.jpg";
const CountriesModal = ({ style, onClose }) => {
  return (
    <RiseModal style={style} onClose={onClose}>
      <div className="countries_modal">
        <div className="countries_modal_item">
          <img src={Arabic} alt="" className="countries_modal_flag" />
          <div className="countries_modal_name">Arabic</div>
        </div>
        <div className="countries_modal_item">
          <img src={Spanish} alt="" className="countries_modal_flag" />
          <div className="countries_modal_name">Spanish</div>
        </div>
        <div className="countries_modal_item">
          <img src={French} alt="" className="countries_modal_flag" />
          <div className="countries_modal_name">French</div>
        </div>
        <div className="countries_modal_item">
          <img src={Chinese} alt="" className="countries_modal_flag" />
          <div className="countries_modal_name">Chinese</div>
        </div>
        <div className="countries_modal_item">
          <img src={English} alt="" className="countries_modal_flag" />
          <div className="countries_modal_name">English</div>
        </div>
      </div>
    </RiseModal>
  );
};

export default CountriesModal;

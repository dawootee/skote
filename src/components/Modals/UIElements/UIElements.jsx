import React from "react";
import "./UIElements.css";
import RiseModal from "../../RiseModal/RiseModal";

const UIElements = (props) => {
  return (
    <RiseModal {...props}>
      <div className="ui_elements_modal">
        <div className="ui_elements_section">
          <div className="uem_section_item">Alerts</div>
          <div className="uem_section_item">Buttons</div>
          <div className="uem_section_item">Cards</div>
          <div className="uem_section_item">Carousals</div>
          <div className="uem_section_item">Dropdowns</div>
          <div className="uem_section_item">OffCanvas</div>
          <div className="uem_section_item">Grid</div>
        </div>
        <div className="ui_elements_section">
          <div className="uem_section_item">Images</div>
          <div className="uem_section_item">Modals</div>
          <div className="uem_section_item">Range Slider</div>
          <div className="uem_section_item">Sessions Timeout</div>
          <div className="uem_section_item">Progress Bars</div>
          <div className="uem_section_item">Sweet Alerts</div>
        </div>
        <div className="ui_elements_section">
          <div className="uem_section_item">Tabs & Accordions </div>
          <div className="uem_section_item">Typography</div>
          <div className="uem_section_item">Video</div>
          <div className="uem_section_item">Generals</div>
          <div className="uem_section_item">Colors</div>
          <div className="uem_section_item">Toast</div>
        </div>
      </div>
    </RiseModal>
  );
};

export default UIElements;

import React from "react";
import RiseModal from "../../RiseModal/RiseModal";
import "./DashboardModal.css";

const DashboardModal = (props) => {
  return (
    <RiseModal {...props}>
      <div className="dashboard_modal">
        <div className="dashboard_modal_item">Defaul</div>
        <div className="dashboard_modal_item">Saas</div>
        <div className="dashboard_modal_item">Crypto</div>
        <div className="dashboard_modal_item">Blog</div>
      </div>
    </RiseModal>
  );
};

export default DashboardModal;

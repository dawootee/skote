import React from "react";
import "./ListTemplateModal.css";
import RiseModal from "../../RiseModal/RiseModal";

const ListTemplateModal = (props) => {
  return (
    <RiseModal {...props}>
      <div className="list_template_modal">
        {props.items?.map((item) => {
          return <div className="ltm__item">{item}</div>;
        })}
        {props.treeItems?.map((item) => {
          return item;
        })}
      </div>
    </RiseModal>
  );
};

export default ListTemplateModal;

import React from "react";
import "./ComponentsModal.css";
import RiseModal from "../../RiseModal/RiseModal";
import TreeItem from "../../TreeItem/TreeItem";
import ListTemplateModal from "../ListTemplateModal/ListTemplateModal";

const ComponentsModal = (props) => {
  return (
    <RiseModal {...props}>
      <div className="components_modal">
        <TreeItem
          text="Forms"
          Modal={
            <ListTemplateModal
              closeOnLeave={true}
              items={[
                "Form Elements",
                "Form Layouts",
                "Form Advanced",
                "Form Editor",
                "Form File Upload",
                "Form Repeater",
                "Form Wizard",
              ]}
            />
          }
        />
        <TreeItem
          text="Tables"
          Modal={
            <ListTemplateModal
              closeOnLeave={true}
              items={["Basic Tables", "Data Table", "Editable Table"]}
            />
          }
        />
        <TreeItem
          text="Charts"
          Modal={
            <ListTemplateModal
              closeOnLeave={true}
              items={["Apex Charts", "Chartjs Charts"]}
            />
          }
        />
        <TreeItem
          text="Icons"
          Modal={
            <ListTemplateModal
              closeOnLeave={true}
              items={[
                "Boxicons",
                "Material Design",
                "Dripicons",
                "Font Awesome",
              ]}
            />
          }
        />
      </div>
    </RiseModal>
  );
};

export default ComponentsModal;

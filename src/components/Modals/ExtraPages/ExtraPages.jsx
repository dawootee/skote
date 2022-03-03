import React from "react";
import "./ExtraPages.css";
import RiseModal from "../../RiseModal/RiseModal";
import TreeItem from "../../TreeItem/TreeItem";
import ListTemplateModal from "../ListTemplateModal/ListTemplateModal";

const ExtraPages = (props) => {
  return (
    <RiseModal {...props}>
      <div className="extra_pages_modal">
        <TreeItem
          text="Invoices"
          Modal={
            <ListTemplateModal
              closeOnLeave={true}
              items={["Invoice List", "Invoice Detail"]}
            />
          }
        />
        <TreeItem
          text="Authentication"
          Modal={
            <ListTemplateModal
              closeOnLeave={true}
              items={[
                "Login",
                "Login 2",
                "Register",
                "Register 2",
                "Recover Password",
                "Recover Password 2",
                "Lock Screen",
                "Lock Screen 2",
                "Confirm Mail",
                "Confirm Mail 2",
                "Email Verification",
                "Email Verification 2",
                "Two Step Verification",
                "Two Step Verification 2",
              ]}
            />
          }
        />
        <TreeItem
          text="Utility"
          Modal={
            <ListTemplateModal
              closeOnLeave={true}
              items={[
                "Starter Page",
                "Maintenance",
                "Coming Soon",
                "Timeline",
                "FAQs",
                "Pricing",
                "Error 404",
                "Error 500",
              ]}
            />
          }
        />
      </div>
    </RiseModal>
  );
};

export default ExtraPages;

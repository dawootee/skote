import React from "react";
import "./Apps.css";
import RiseModal from "../../RiseModal/RiseModal";
import TreeItem from "../../TreeItem/TreeItem";
import ListTemplateModal from "../ListTemplateModal/ListTemplateModal";
const Apps = (props) => {
  return (
    <RiseModal {...props}>
      <div className="apps_list_modal">
        <div className="apps_list_item">Calander</div>
        <div className="apps_list_item">Chat</div>
        <div className="apps_list_item">File Manager</div>
        <TreeItem
          text="Email"
          Modal={
            <ListTemplateModal
              closeOnLeave={true}
              items={["Inbox", "Read Email"]}
              treeItems={[
                <TreeItem
                  text="Templates"
                  Modal={
                    <ListTemplateModal
                      closeOnLeave={true}
                      items={["Basic Action", "Alert Email", "Billing Email"]}
                    />
                  }
                />,
              ]}
            />
          }
        />
        <TreeItem
          text="Ecommerce"
          Modal={
            <ListTemplateModal
              closeOnLeave={true}
              items={[
                "Products",
                "Product Detail",
                "Orders",
                "Customers",
                "Cart",
                "Checkout",
                "Shops",
                "Add Product",
              ]}
            />
          }
        />
        <TreeItem
          text="Crypto"
          Modal={
            <ListTemplateModal
              closeOnLeave={true}
              items={[
                "Wallet",
                "Buy/Sell",
                "Exchange",
                "Lending",
                "Orders",
                "KYC Application",
                "ICO Landing",
              ]}
            />
          }
        />
        <TreeItem
          text="Projects"
          Modal={
            <ListTemplateModal
              closeOnLeave={true}
              items={[
                "Projects Grid",
                "Projects List",
                "Project Overview",
                "Create New",
              ]}
            />
          }
        />
        <TreeItem
          text="Tasks"
          Modal={
            <ListTemplateModal
              closeOnLeave={true}
              items={["Task List", "Create Task"]}
            />
          }
        />
        <TreeItem
          text="Contacts"
          Modal={
            <ListTemplateModal
              closeOnLeave={true}
              items={["User Grid", "User List", "Profile"]}
            />
          }
        />
        <TreeItem
          text="Blog"
          Modal={
            <ListTemplateModal
              closeOnLeave={true}
              items={["Blog List", "Blog Grid", "Blog Detail"]}
            />
          }
        />
      </div>
    </RiseModal>
  );
};

export default Apps;

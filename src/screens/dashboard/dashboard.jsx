import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Topbar from "../../components/Topbar/Topbar";
import EmailSent from "./components/EmailSent/EmailSent";
import MiniCard from "./components/MiniCard/MiniCard";
import MonthlyEarning from "./components/MonthlyEarning/MonthlyEarning";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import "./dashboard.css";
import Order from "@mui/icons-material/CardTravel";
import Revenue from "@mui/icons-material/DownloadForOfflineOutlined";
import Price from "@mui/icons-material/LocalOfferOutlined";
import SocialSource from "./components/SocialSource/SocialSource";
import ActivityCard from "./components/ActivityCard/ActivityCard";
import TopCitiesCard from "./components/TopCitiesCard/TopCitiesCard";
import DataTable from "./components/Table/Table";

const dashboard = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="dashboard_body">
        <div className="dashboard_body_container">
          <div className="dashboard_heading_bar">
            <span className="dashboard_heading_title">DASHBOARD</span>
            <span className="dashboard_heading_subtitle">
              Dashboards / Dashboard
            </span>
          </div>

          <div className="dashboard_upper_section">
            <div className="dus_sidebar">
              <ProfileCard />
              <MonthlyEarning />
            </div>
            <div className="dus_main">
              <div className="dus_main_minicards">
                <MiniCard icon={<Order />} label="Orders" title="1,235" />
                <MiniCard icon={<Revenue />} label="Revenue" title="$32, 723" />
                <MiniCard
                  icon={<Price />}
                  label="Average Price"
                  title="$16.2"
                />
              </div>
              <EmailSent />
            </div>
          </div>
          <div className="dashboard_middle_section">
            <div className="dms_card_wrapper">
              <SocialSource />
            </div>
            <div className="dms_card_wrapper">
              <ActivityCard />
            </div>
            <div className="dms_card_wrapper">
              <TopCitiesCard />
            </div>
          </div>
          <div className="dashboard_table_section">
            <div className="dashboard_table_section">Latest Transaction</div>
            <DataTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;

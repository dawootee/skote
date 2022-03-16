import React from "react";
import "./Saas.css";
import Navbar from "../../../../components/Navbar/Navbar";
import Topbar from "../../../../components/Topbar/Topbar";
import SaasBanner from "../../components/SaasBanner/SaasBanner";
import Cover from "../../../../assets/profile-cover.png";
import MiniCard from "../../components/MiniCard2/MiniCard2";
import Order from "@mui/icons-material/CardTravel";
import Revenue from "@mui/icons-material/DownloadForOfflineOutlined";
import Price from "@mui/icons-material/LocalOfferOutlined";
import Earnings from "../../../../components/Charts/Earnings";
import TopSellingCard from "../../components/TopSellingCard/TopSellingCard";
import TasksCard from "../../components/TasksCard/TasksCard";

const Saas = () => {
  return (
    <div className="saas_dashboard">
      <Topbar />
      <Navbar />
      <div className="dashboardsaas_body">
        <div className="dashboardsaas_body_container">
          <div className="dashboardsaas_heading_bar">
            <span className="dashboardsaas_heading_title">SAAS</span>
            <span className="dashboardsaas_heading_subtitle">
              Dashboards / Saas
            </span>
          </div>
          <SaasBanner />
          <div className="dsbc_banner2">
            <div className="dsbc_banner2_left">
              <img src={Cover} alt="" className="dsbc_banner2_leftimg" />
              <div className="dsbc_banner2l_title">Welcome Back !</div>
              <div className="dsbc_banner2l_subtitle">Skote Saas Dashboard</div>
              <ul className="dsbc_banner2l_list">
                <li className="dsbc_banner2l_li">7 + Layouts</li>
                <li className="dsbc_banner2l_li">Multiple apps</li>
              </ul>
            </div>
            <div className="dsbc_banner2_right">
              <MiniCard icon={<Order />} title="Orders" price="1452" />
              <MiniCard icon={<Revenue />} title="Revenue" price="$ 28,452" />
              <MiniCard icon={<Price />} title="Average Price" price="$ 16.2" />
            </div>
          </div>
          {/* <div className="dsbc_charts_container">
            <div className="dsbccc_left">
              <Earnings />
            </div>
            <div className="dsbccc_right"></div>
          </div> */}
          <div className="dsbc_banner2_cards">
            <div className="dsbc_banner2_citem">
              <TopSellingCard />
            </div>
            <div className="dsbc_banner2_citem">
              <TasksCard />
            </div>
            <div className="dsbc_banner2_citem">
              <TopSellingCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saas;

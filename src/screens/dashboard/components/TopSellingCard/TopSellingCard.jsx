import React from "react";
import "./TopSellingCard.css";
import DougnetChart1 from "../../../../components/Charts/DougnetChart1";

const TopSellingCard = () => {
  return (
    <div className="top_selling_card">
      <div className="tsc_header">
        <div className="tsch_text">Top Selling product</div>
        <div className="tsch_months">
          <select className="tsch_months_dropdown">
            <option className="tsch_months_option">Jan</option>
            <option className="tsch_months_option">Dec</option>
            <option className="tsch_months_option">Nov</option>
            <option className="tsch_months_option">Oct</option>
          </select>
          <div className="tsch_months_btn">Month</div>
        </div>
      </div>
      <div className="tsc_subheader">
        <div className="tsc_subeheader_label">Product A</div>
        <div className="tsc_subeheader_price">$ 6385</div>
        <div className="db_mini_footer">
          <span>+0.2%</span>&nbsp;From Previos period
        </div>
      </div>
      <div className="tsc_body">
        <div className="tsc_body_item">
          <div className="tsc_bi_left">
            <div className="tsc_bi_title">Product A</div>
            <div className="tsc_bi_desc">Neque quis est</div>
          </div>
          <div className="tsc_bi_right">
            <div className="tsc_bir_graph">
              <DougnetChart1 data={[70, 30]} />
            </div>
            <div className="tsc_bir_right">
              <div className="tsc_birr_top">sales</div>
              <div className="tsc_birr_bottom">37%</div>
            </div>
          </div>
        </div>
        <div className="tsc_body_item">
          <div className="tsc_bi_left">
            <div className="tsc_bi_title">Product A</div>
            <div className="tsc_bi_desc">Neque quis est</div>
          </div>
          <div className="tsc_bi_right">
            <div className="tsc_bir_graph">
              <DougnetChart1 data={[70, 30]} />
            </div>
            <div className="tsc_bir_right">
              <div className="tsc_birr_top">sales</div>
              <div className="tsc_birr_bottom">37%</div>
            </div>
          </div>
        </div>
        <div className="tsc_body_item">
          <div className="tsc_bi_left">
            <div className="tsc_bi_title">Product A</div>
            <div className="tsc_bi_desc">Neque quis est</div>
          </div>
          <div className="tsc_bi_right">
            <div className="tsc_bir_graph">
              <DougnetChart1 data={[70, 30]} />
            </div>
            <div className="tsc_bir_right">
              <div className="tsc_birr_top">sales</div>
              <div className="tsc_birr_bottom">37%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellingCard;

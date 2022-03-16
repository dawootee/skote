import React from "react";
import "./ActivityCard.css";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const data = [
  {
    date: "22 Nov",
    desc: "Responded to need “Volunteer Activities",
    active: false,
  },
  {
    date: "17 Nov",
    desc: "Everyone realizes why a new common language would be desirable.Everyone realizes why a new common language would be desirable",
    active: false,
  },
  {
    date: "15 Nov",
    desc: "Joined the group “Boardsmanship Forum”",
    active: true,
  },
  {
    date: "12 Nov",
    desc: "Responded to need “In-Kind Opportunity”",
    active: false,
  },
];

const ActivityCard = () => {
  return (
    <div className="activity_card_wrap">
      <div className="activity_card_heading">Activity</div>
      <div className="activity_card_body">
        {data.map((item, index) => {
          return (
            <div className="ac_body_item">
              <div className="ac_body_icon1wrap">
                <ArrowCircleRightOutlinedIcon
                  className={`acbi_icon1 ${item.active && "acbi_icon1_active"}`}
                />
              </div>
              <div className="acbi_date">{item.date}</div>
              <div className="ac_body_icon2wrap">
                <ArrowForwardOutlinedIcon className="acbi_icon2" />
              </div>
              <div className="acbi_desc">
                {item.desc.substring(0, 62)}
                {item.desc.length > 62 ? "..." : ""}
                {item.desc.length > 62 ? (
                  <span className="acbi_desc_readmore">Read more</span>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="activity_card_footer">
        <div className="activity_card_btn">
          <span className="activity_card_btn_text">View More</span>
          <ArrowRightAltIcon className="activity_card_btn_icon" />
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;

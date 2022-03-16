import React, { useState } from "react";
import StackedColumnChart from "../../../../components/Charts/StackedColumnChart";
import "./EmailSent.css";
const EmailSent = () => {
  const [active, setActive] = useState("week");
  const handleActive = (opt) => {
    setActive(opt);
  };
  return (
    <div className="email_sent_wrapper">
      <div className="email_sent_header">
        <div className="es_header_title">Email Sent</div>
        <div className="es_header_options">
          <div
            className={`es_header_option ${
              active === "week" && "es_headetopt_active"
            }`}
            onClick={() => handleActive("week")}
          >
            Week
          </div>
          <div
            className={`es_header_option ${
              active === "month" && "es_headetopt_active"
            }`}
            onClick={() => handleActive("month")}
          >
            Month
          </div>
          <div
            className={`es_header_option ${
              active === "year" && "es_headetopt_active"
            }`}
            onClick={() => handleActive("year")}
          >
            Year
          </div>
        </div>
      </div>
      <div className="email_sent_body">
        <StackedColumnChart />
      </div>
    </div>
  );
};

export default EmailSent;

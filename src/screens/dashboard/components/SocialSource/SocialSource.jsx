import React from "react";
import "./SocialSource.css";
import Facebook from "@mui/icons-material/FacebookRounded";
import { ReactComponent as Instagram } from "../../../../assets/instagram.svg";
import { ReactComponent as Twitter } from "../../../../assets/twitter.svg";
import ArrowForward from "@mui/icons-material/ArrowForwardRounded";

const SocialSource = () => {
  return (
    <div className="social_source">
      <div className="social_source_heading">Social Source</div>
      <div className="social_source_body">
        <div className="social_source_logobox">
          <Facebook style={{ color: "#556ee6" }} />
        </div>
        <div className="social_source_title">
          Facebook - <span>125 sales</span>
        </div>
        <div className="social_source_desc">
          Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
          libero venenatis faucibus tincidunt.
        </div>
        <div className="social_source_link">
          <span>Learn more</span> <ArrowForward style={{ fontSize: "13px" }} />
        </div>
      </div>
      <div className="social_source_footer">
        <div className="social_source_footeritem">
          <div className="ss_fi_iconbox1">
            <Facebook style={{ color: "white" }} />
          </div>
          <div className="ss_fi_title">Facebook</div>
          <div className="ss_fi_desc">125 sales</div>
        </div>
        <div className="social_source_footeritem">
          <div className="ss_fi_iconbox2">
            <Twitter style={{ width: "25px" }} />
          </div>
          <div className="ss_fi_title">Twitter</div>
          <div className="ss_fi_desc">112 sales</div>
        </div>
        <div className="social_source_footeritem">
          <div className="ss_fi_iconbox3">
            <Instagram style={{ width: "25px" }} />
          </div>
          <div className="ss_fi_title">Instagram</div>
          <div className="ss_fi_desc">104 sales</div>
        </div>
      </div>
    </div>
  );
};

export default SocialSource;

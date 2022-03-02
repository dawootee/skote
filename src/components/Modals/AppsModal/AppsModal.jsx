import React from "react";
import "./AppsModal.css";
import RiseModal from "../../RiseModal/RiseModal";
import Github from "../../../assets/github.png";
import Bitbucket from "../../../assets/bitbucket.png";
import Dribble from "../../../assets/dribble.png";
import Dropbox from "../../../assets/dropbox.png";
import MailChimp from "../../../assets/mailchimp.png";
import Slack from "../../../assets/slack.png";

const AppsModal = ({ style, onClose }) => {
  return (
    <RiseModal style={style} onClose={onClose}>
      <div className="apps_modal">
        <div className="apps_modal_item">
          <img src={Github} alt="" className="am_item_icon" />
          <div className="am_item_name">Github</div>
        </div>
        <div className="apps_modal_item">
          <img src={Bitbucket} alt="" className="am_item_icon" />
          <div className="am_item_name">Bitbucket</div>
        </div>
        <div className="apps_modal_item">
          <img src={Dribble} alt="" className="am_item_icon" />
          <div className="am_item_name">Dribble</div>
        </div>
        <div className="apps_modal_item">
          <img src={Dropbox} alt="" className="am_item_icon" />
          <div className="am_item_name">Dropbox</div>
        </div>
        <div className="apps_modal_item">
          <img src={MailChimp} alt="" className="am_item_icon" />
          <div className="am_item_name">Mail Chimp</div>
        </div>
        <div className="apps_modal_item">
          <img src={Slack} alt="" className="am_item_icon" />
          <div className="am_item_name">Slack</div>
        </div>
      </div>
    </RiseModal>
  );
};

export default AppsModal;

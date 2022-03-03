import React from "react";
import "./SettingsDrawer.css";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { BpCheckedIcon, BpIcon, BpRadio } from "../../CustomizedRadios.js";

const SettingsDrawer = ({ show, onClose }) => {
  return (
    <div className={`drawer_box ${show ? "show_sd" : "hide_sd"}`}>
      <div className="drawer_box_header">
        <h3 className="dbh_heading">Theme Customizer</h3>
        <CancelRoundedIcon className="dbh_close" onClick={onClose} />
      </div>
      <div className="dbh_body">
        <div className="dbh_body_item">
          <div className="dbhb_item_heading">Layout Width</div>
          <FormControl>
            <RadioGroup
              defaultValue="fluid"
              aria-labelledby="demo-customized"
              name="layout-width"
              sx={{
                display: "flex",
                height: "30px",
                width: "100%",
                alignItems: "center",
                margin: "5px 0",
              }}
            >
              <FormControlLabel
                value="fluid"
                control={<BpRadio />}
                label="Fluid"
              />
              <FormControlLabel
                value="boxed"
                control={<BpRadio />}
                label="Boxed"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="dbh_body_item">
          <div className="dbhb_item_heading">Layout Position</div>
          <FormControl>
            <RadioGroup
              defaultValue="fixed"
              aria-labelledby="demo-customized-radios"
              name="layout-position"
              sx={{
                display: "flex",
                height: "30px",
                width: "100%",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <FormControlLabel
                value="fixed"
                control={<BpRadio />}
                label="Fixed"
              />
              <FormControlLabel
                value="scrollable"
                control={<BpRadio />}
                label="Scrollable"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="dbh_body_item">
          <div className="dbhb_item_heading">Tapbar Color</div>
          <FormControl>
            <RadioGroup
              defaultValue="light"
              aria-labelledby="demo-customized-radios"
              name="tapbar-color"
              sx={{
                display: "flex",
                height: "30px",
                width: "100%",
                alignItems: "center",
                margin: "5px 0",
              }}
            >
              <FormControlLabel
                value="light"
                control={<BpRadio />}
                label="Light"
              />
              <FormControlLabel
                value="dark"
                control={<BpRadio />}
                label="Dark"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default SettingsDrawer;

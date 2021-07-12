import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

function Topbar() {
  return (
    <div>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topleft">DA5HB0aRd</div>
          <div className="topright">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
            </div>
                <div className="topbarIconContainer">
              <Settings />
            </div>
            <img src="https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png" alt=""  className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;

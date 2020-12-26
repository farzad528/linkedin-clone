import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://tandsgo.com/wp-content/uploads/2015/03/linkedin-27.jpg" alt="" />
        <Avatar className="sidebar__avatar"/>
        <h2>Farzad Sunavala</h2>
        <h4>fsunavala1@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,500 views</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,500 views</p>
        </div>
      </div>
      <div className="sidebar__bottom">
          <p>recent</p>
      </div>
    </div>
  );
}

export default Sidebar;

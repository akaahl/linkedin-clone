import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = ["reactjs", "programming", "webdev", "uxuidesign"];

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
          alt="top background"
        />
        <Avatar className="sidebar__avatar" />

        <h2>A.K Afiq</h2>
        <h4>a.k.afiq@live.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">1,567</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem &&
          recentItem.map((item) => (
            <div className="sidebar__recentItem">
              <span className="sidebar__hash">#</span>
              <p>{item}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Sidebar;
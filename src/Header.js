import { Search } from "@material-ui/icons";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
        <h1>this is the header</h1>
      <div className="header__left">
          <img src="" alt=""/>
          <div className="header__search">
              <Search/>
              <input type="text"/>
          </div>
      </div>

      <div className="header__right"></div>
    </div>
  );
}

export default Header;

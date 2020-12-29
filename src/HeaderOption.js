import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./HeaderOption.css";

function HeaderOption({ Icon, title, avatar, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div className="headerOption" onClick={onClick}>
      {avatar && (
        <Avatar className="headerOption__icon">{user?.displayName[0]}</Avatar>
      )}

      {Icon && <Icon className="headerOption__icon" />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;

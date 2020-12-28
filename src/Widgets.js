import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
          <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <Info />
      </div>

      {newsArticle("PAPA React is back", "Top news")}
      {newsArticle("Coronavirus: US updates", "Top news")}
      {newsArticle("Coronavirus: US updates", "Top news")}
      {newsArticle("Coronavirus: US updates", "Top news")}
      {newsArticle("Coronavirus: US updates", "Top news")}
    </div>
  );
}

export default Widgets;

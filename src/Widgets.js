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

      {newsArticle("FullStackFarzzy is BACK!", "Top news - 102,901 readers")}
      {newsArticle("ReactJS ranked top Front-End Framework", "21h ago - 12,906 readers")}
      {newsArticle("150% growth in demand for developers through 2025", "20h ago - 16,601 readers")}
      {newsArticle("Coronavirus U.S. Updates", "16h ago - 2,740 readers")}
      {newsArticle("Are we too dependent on Apple?", "12h ago - 1,999 readers")}
      {newsArticle("Couples say 'I-do'...to real estate", "5h ago - 502 readers")}
    </div>
  );
}

export default Widgets;

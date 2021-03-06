import React from "react";
import "./Widget.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
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
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle(
        "A.K. Afiq is Awesome",
        "Breaking News - Devs are all over him"
      )}

      {newsArticle("Coronavirus - Brunei Updates", "Local cases are net zero")}

      {newsArticle(
        "Remote jobs",
        "Companies are now hiring for remote software engineers"
      )}
    </div>
  );
}

export default Widget;

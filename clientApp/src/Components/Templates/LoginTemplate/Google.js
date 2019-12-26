import React from "react";
import "../../../css/main.css";
import "../../../css/util.css";
import img from "../../Atoms/Icon/Icons/icon-google.png";
const Google = props => {
  return (
    <div align="center">
      <a href="www.google.com" className="btn-google m-b-10">
        <img src={img} alt="GOOGLE" />
        Use Google Account
      </a>
    </div>
  );
};

export default Google;

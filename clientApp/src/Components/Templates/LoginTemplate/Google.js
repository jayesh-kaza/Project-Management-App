import React from "react";
import "../../../css/main.css";
import "../../../css/util.css";
import img from "../../Atoms/Icon/Icons/icon-google.png";
import {Link} from "react-router-dom"

// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const onLogin = async () => {
//   const resp = await fetch(
//     proxyurl+"https://accounts.google.com/o/oauth2/v2/auth?client_id=245595399236-o5gujqtbe35dr6hrljaocuprqnsk5ft5.apps.googleusercontent.com&response_type=code&scope=https://www.googleapis.com/auth/gmail.send&redirect_uri=http://localhost&access_type=offline",
//     { headers:{'Access-Control-Allow-Origin': '*'}}
//     )
//   document.getElementById('ggllogin').innerHTML = await resp.text()
//}
const Google = props => {
  const clientId="245595399236-o5gujqtbe35dr6hrljaocuprqnsk5ft5.apps.googleusercontent.com"
  const url=`https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&response_type=code&scope=https://www.googleapis.com/auth/gmail.send&redirect_uri=http://localhost:3000&access_type=offline`
  return (
    <div align="center">
      <a href={url}  className="btn-google m-b-10">
        <img src={img} alt="GOOGLE" />
        Use Google Account
      </a>
    </div>
  );
};

export default Google;

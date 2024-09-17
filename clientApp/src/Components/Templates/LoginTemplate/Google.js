import React, { useEffect } from "react";
import "../../../css/main.css";
import "../../../css/util.css";
import img from "../../Atoms/Icon/Icons/icon-google.png";
import auth0 from 'auth0-js'
import Button from "@material-ui/core/Button";
const login =async()=>{
  var webAuth = await new auth0.WebAuth({
    domain:       'dev-vg-166vp.auth0.com',
    clientID:     'vDQ6nvuNYboGOwuZNjFnJ6Wme3B7JRZI',
    redirectUri:'http://localhost:3000/tasks',
    responseType :'id_token token'
  });

  // Trigger login with google
  webAuth.authorize({
    connection: 'google-oauth2'
  });

} 

const Google = props => {

 
  return (
    <div align="center">
      <Button  className="btn-google m-b-10" onClick={login}>
        <img src={img} alt="GOOGLE" />
        Use Google Account
      </Button>
    </div>
  );
};

export default Google;

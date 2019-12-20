import React, { useEffect } from "react";
import "../../../css/main.css";
import "../../../css/util.css";
import img from "../../Atoms/Icon/Icons/icon-google.png";
import {Link} from "react-router-dom"


const login=async (uri)=>{
  const url="https://www.googleapis.com/oauth2/v4/token"
  console.log(uri.slice(uri.indexOf("code=")+5,uri.indexOf("&scope")))

  const response=await fetch(url,{
    method:'POST',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body:{
      code:uri.slice(uri.indexOf("code=")+5,uri.indexOf("&scope")),
      client_id:'245595399236-o5gujqtbe35dr6hrljaocuprqnsk5ft5.apps.googleusercontent.com',
      client_secret:'eXuacGpN8uHJPrANGeY54-5v',
      redirect_uri:'http://localhost:3000',
      grant_type:'authorization_code',
    }
  })
console.log(response)
}
const Google = props => {
  const clientId="245595399236-o5gujqtbe35dr6hrljaocuprqnsk5ft5.apps.googleusercontent.com"
  const scope="https://www.googleapis.com/auth/userinfo.profile"
  const redirectUri="http://localhost:3000"
  const url=`https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&response_type=code&scope=${scope}&redirect_uri=${redirectUri}&access_type=offline`

  useEffect(()=>{
    if(window.location.search.includes("code=")){
      login(window.location.search)
    }
  },[window.location.search])
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

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import auth0 from 'auth0-js'
const auth=async()=>{
return await new auth0.WebAuth({
    domain:       'dev-vg-166vp.auth0.com',
    clientID:     'vDQ6nvuNYboGOwuZNjFnJ6Wme3B7JRZI',
    redirectUri:'http://localhost:3000/tasks',
    responseType :'id_token token'
  });}

const AuthContext=React.createContext({auth0:auth()})

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

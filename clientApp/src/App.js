import React, { useState } from "react";
import LandingPage from "./Components/Pages/LandingPage";
import { BrowserRouter as Router } from 'react-router-dom'
import HomePageHeader from "./Components/Organism/HomePageHeader";

const App = props => {
  // const [log, setLog] = useState(true);
  // const onClickHandle = () => {
  //   console.log
  //   setLog(!log)
  // }
  return <Router>
    {/* {log}?
    <LandingPage onChange={onClickHandle} />: */}
    <HomePageHeader />
  </Router>;
};

export default App;

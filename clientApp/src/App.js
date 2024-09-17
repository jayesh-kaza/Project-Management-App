import React from "react";
import LandingPage from "./Components/Pages/LandingPage";
import {BrowserRouter as Router} from 'react-router-dom'

const App = props => {
  return <Router>
    <LandingPage />
    </Router>;
};

export default App;

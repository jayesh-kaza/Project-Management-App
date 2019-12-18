import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePageTemplate from "./Components/Templates/HomePageTemplate";
import LandingPage from "./Components/Pages/LandingPage";

const App = props => {
  const [page, setPage] = useState(false);
  const homePage = () => setPage(true);
  const landingPage = () => setPage(false);
  return (
    <Router>
      {page ? (
        <HomePageTemplate setPage={landingPage} />
      ) : (
        <LandingPage setPage={homePage} />
      )}
    </Router>
  );
};

export default App;

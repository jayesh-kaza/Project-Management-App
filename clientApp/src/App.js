import React from "react";
import HomePageHeader from './Components/Organism/HomePageHeader';
import SideBar from './Components/Organism/SideBar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <div align="center">Home</div>
  },
  {
    path: '/tasks',
    main: () => <div align="center">My Tasks</div>
  },
  {
    path: '/projects',
    main: () => <div align="center">My Projects</div>
  },
  {
    path: '/teams',
    main: () => <div align="center">My Teams</div>
  }
]

const App = props => {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <div>
        <HomePageHeader open={open} handleDrawerOpen={handleDrawerOpen} />
        <SideBar open={open} handleDrawerClose={handleDrawerClose} routes={routes} />
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main} />
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default App;


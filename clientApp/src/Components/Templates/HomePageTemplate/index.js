import React from "react";
import HomePageHeader from "../../Organism/HomePageHeader";
import SideBar from "../../Organism/SideBar";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../Pages/HomePage";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />
  },
  {
    path: "/tasks",
    main: () => <div align="center">My Tasks</div>
  },
  {
    path: "/projects",
    main: () => <div align="center">My Projects</div>
  },
  {
    path: "/teams",
    main: () => <div align="center">My Teams</div>
  },
  {
    path: "/favourites",
    main: () => <div align="center">Favourites</div>
  },
  {
    path: "/allItems",
    main: () => <div align="center">All items</div>
  },
  {
    path: "/deletedItems",
    main: () => <div align="center">Deleted Items</div>
  },
  {
    path: "/createdTasks",
    main: () => <div align="center">Created Tasks</div>
  },
  {
    path: "/assignedTasks",
    main: () => <div align="center">Assigned Tasks</div>
  },
  {
    path: "/recentTasks",
    main: () => <div align="center">Recent tasks</div>
  }
];

function HomePageTemplate({setPage}) {
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <HomePageHeader open={open} setPage={setPage} handleDrawerOpen={handleDrawerOpen} />
      <SideBar
        open={open}
        handleDrawerClose={handleDrawerClose}
        routes={routes}
      />
      <div fullHeight>
        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </Switch>
      </div>
    </div>
  );
}

export default HomePageTemplate;

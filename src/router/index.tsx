import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

import routes from "./routes";

import NewUserPage from "~/pages/NewUser";
import DashboardPage from "~/pages/Dashboard";

const Router = () => {
  return (
    <div style={{ paddingTop: 64, height: "100%" }}>
      <HashRouter>
        <Switch>
          <Route exact path={routes.dashboard} component={DashboardPage} />
          <Route exact path={routes.newUser} component={NewUserPage} />
          <Route exact path="/">
            <Redirect to={routes.dashboard} />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
};

export default Router;

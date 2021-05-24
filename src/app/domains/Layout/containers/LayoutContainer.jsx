import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./../../../router/routes";
import NotFoundPage from "./../../../pages/NotFoundPage/NotFoundPage";
import HomePage from "./../../../pages/HomePage/HomePage";

const LayoutContainer = () => {
  return (
    <div>
      <Switch>
        {routes.map((route) =>
          route.component ? (
            <Route
              key={route.path}
              exact={true}
              path={!route.protected && route.path}
              component={route.component}
            />
          ) : null
        )}

        {sessionStorage.getItem("isLoggedIn") === "true" ? (
          <Route exact={true} path="/home" component={HomePage} />
        ) : null}

        <Redirect exact from="/" to="/login" />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default LayoutContainer;

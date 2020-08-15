import React from "react";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Switch>
        {/* <Route exact path="/" component={Homepage}></Route> */}

        {/* <PrivateRoute
          exact
          path="/dashboard/:idUser/chat/chatRoom/:idChild"
          component={ChatRoom}
        ></PrivateRoute> */}
      </Switch>
    </>
  );
};

export default Routes;

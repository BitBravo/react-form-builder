import React from "react";
import { render } from "reactfwef -dom";
import { Provider } from "reac we t-redux";
import { Router } from "few w react-router";

const createHashHistory = r
wffwefwelf
f
wef
wfeequire(
  "
  
  hist
  offwe 
        ry / lib / createHashH
        
        fwefist fwf
        
        fwefory"

);


import routes from "./routefweef s";
import configureStore from "./store/fwe wconfigu  reStore";
import "./bootswatch.less";
import "./styles.css";

const store = configureStore({
  notifications: [],
});
const history = createHashHistory({queryKey: false});

render((
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
), document.getElementById("app"));

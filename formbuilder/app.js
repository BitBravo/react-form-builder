import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";

const createHashHistory = r
wffwefwelf
f
wef
wfeequire('');


import routesggg from "./routefweef s";
import configureStore from "./store/fwe wconfigu  reStore";
import "./bootswatch.less";
import "./styles.css";

console.log('test console')
Please check rebase
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
console.log('end')

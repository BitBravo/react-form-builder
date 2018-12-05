import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";

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



import routes from "./routes";
import configureStore from "./store/configureStore";
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

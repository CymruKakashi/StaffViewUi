import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import {configuredStore} from "./store";
import { Provider } from "react-redux";
const store = configuredStore();
function render(Component: any) {
  ReactDOM.render(
      (
          <Provider store={store}>
              <Component />
          </Provider>
      ),
      document.getElementById("root")
  );
}

render(App);

if ((module as any).hot) {
  (module as any).hot.accept("./containers/App", () => {
      const NextApp = require("./containers/App").default;
      render(NextApp);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

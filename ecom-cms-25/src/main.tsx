import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./assets/css/global.css";
import RouterConfig from "./config/router.config";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
     <RouterConfig></RouterConfig>
    </Provider>
  </StrictMode>
);

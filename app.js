import { app } from "./web_modules/hyperapp.js";

import { state } from "./state.js";
import { CalculatorView } from "./view.js";

app({
  init: () => state,
  view: CalculatorView,
  node: document.getElementById("app")
});

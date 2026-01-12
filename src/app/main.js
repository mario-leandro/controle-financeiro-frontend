import { render } from "../core/render.js";
import { App } from "./App.js";
import { useRoute } from "../core/route.js";

window.addEventListener("popstate", () => {
  const [, setRoute] = useRoute();
  setRoute(window.location.pathname);
});

render(document.getElementById("app"), App);

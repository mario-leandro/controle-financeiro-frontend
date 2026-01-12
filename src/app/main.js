import { useRoute } from "../core/route.js";
import { App } from "./App.js";

window.addEventListener("popstate", () => {
    const [, setRoute] = useRoute();
    setRoute(window.location.pathname);
});

useRoute(document.getElementById("app"), App);
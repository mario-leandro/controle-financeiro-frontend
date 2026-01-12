import { useRoute } from "./route.js";

export function navigate(path) {
    const [, setRoute] = useRoute();

    history.pushState({}, "", path);
    setRoute(path);
}

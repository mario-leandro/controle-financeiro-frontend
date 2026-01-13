import { useRoute } from "./route.js";

export function useNavigate(path) {
    const [, setRoute] = useRoute();

    history.pushState({}, "", path);
    setRoute(path);
}

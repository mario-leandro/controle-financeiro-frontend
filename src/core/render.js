import { subscribe } from "./useState.js";

export function render(root, component) {
    function update() {
        root.innerHTML = component();
    }

    subscribe(update);
    update();
}
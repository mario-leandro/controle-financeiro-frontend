import { useState } from "./useState.js";

export function useRoute() {
    return useState("route", window.location.pathname);
}
import { useState } from "../core/useState.js";

export function useFinance() {
    return useState("transactions", []);
}
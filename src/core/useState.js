let state = {};
let listeners = [];

export function useState(key, initialValue) {
    if (!(key in state)) state[key] = initialValue;

    function setState(newValue) {
        state[key] = newValue;
        listeners.forEach(listener => listener());
    }

    return [state[key], setState];
}

export function subscribe(listener) {
    listeners.push(listener);
}
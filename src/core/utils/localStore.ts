export enum LocalStoreKey {
    ACCESS_TOKEN = 'access_token',
}

function set(key: LocalStoreKey, value: string) {
    localStorage.setItem(key, value);
}

function get(key: LocalStoreKey) {
    return localStorage.getItem(key);
}

function remove(key: LocalStoreKey) {
    localStorage.removeItem(key);
}

function clear() {
    localStorage.clear();
}

function has(key: LocalStoreKey) {
    return localStorage.getItem(key) !== null;
}

export const localStore = {
    set,
    get,
    remove,
    has,
    clear
};
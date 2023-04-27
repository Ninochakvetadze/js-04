import axios from "axios";
export function _get(url, params) {
    return axios.get(url);
}
export function _post(url, params) {
    return axios.post(url, params);
}
export function _delete(url, params) {
    return axios.delete(url, params);
}
export function _put(url, params) {
    return axios.put(url, params);
}
// axios.get(""), axios.post("");
// axios.delete(""), axios.put("");

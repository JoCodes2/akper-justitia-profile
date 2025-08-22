import axios from 'axios';

const api = axios.create({
    headers: {
        'Accept': 'application/json',
    },
});

// GET
export function apiGet(url, config = {}) {
    return api.get(url, config);
}

// POST
export function apiPost(url, data = {}, config = {}) {
    return api.post(url, data, config);
}

// DELETE
export function apiDelete(url, config = {}) {
    return api.delete(url, config);
}

export default api;

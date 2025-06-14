"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClient = void 0;
class ApiClient {
    //loads the api url target
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    //api client request function
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        };
        try {
            //fetch call to configured url - take url (the endpoint being targeted) and config (RequestInit object that defines req type as 
            //json, as well as the target verb)
            const response = await fetch(url, config);
            if (!response.ok) {
                const errorBody = await response.json().catch(() => null);
                throw {
                    status: response.status,
                    message: errorBody?.message || response.statusText,
                    details: errorBody,
                };
            }
            // ✅ Add this to handle 204 No Content
            if (response.status === 204) {
                return null;
            }
            return await response.json();
        }
        catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }
    //HTTP VERBS 
    async get(endpoint) {
        return this.request(endpoint, { method: 'GET' });
    }
    async post(endpoint, entity) {
        return this.request(endpoint, { method: 'POST', body: JSON.stringify(entity) });
    }
    async patch(endpoint, entity) {
        return this.request(endpoint, { method: 'PATCH', body: JSON.stringify(entity) });
    }
    async delete(endpoint) {
        return this.request(endpoint, { method: 'DELETE' });
    }
}
exports.ApiClient = ApiClient;

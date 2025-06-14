"use strict";
// src/services/api.ts to do
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClient = void 0;
// ref
// https://restfulapi.net/
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://www.webfx.com/web-development/glossary/http-status-codes/
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS
// api configuration
// api client used for any endpoint
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
                throw new Error(`API Error: ${response.status} ${response.statusText}`);
            }
            if (response.status === 204)
                return null;
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

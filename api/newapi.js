"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewApiClient = void 0;
class NewApiClient {
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
            const response = await fetch(url, config);
            if (!response.ok) {
                throw new Error(`API Error: ${response.status} ${response.statusText}`);
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
    async post(endpoint, entityRepresentation) {
        return this.request(endpoint, { method: 'POST', body: entityRepresentation });
    }
    async patch(endpoint, entityRepresentation) {
        return this.request(endpoint, { method: 'PATCH', body: entityRepresentation });
    }
    async delete(endpoint) {
        return this.request(endpoint, { method: 'DELETE' });
    }
}
exports.NewApiClient = NewApiClient;

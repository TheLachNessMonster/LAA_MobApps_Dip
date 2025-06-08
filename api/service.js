"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
class ApiService {
    constructor(client, endpoint) {
        this.client = client;
        this.endpoint = endpoint;
    }
    async getAll() {
        return this.client.get(this.endpoint);
    }
    // get single incident by id
    async getById(id) {
        return this.client.get(this.endpoint + '/' + id);
    }
    // create new incident
    async create(incident) {
        return this.client.post(this.endpoint, incident);
    }
    async update(id, incident) {
        return this.client.patch(this.endpoint + '/' + id, incident);
    }
    async delete(id) {
        return this.client.delete(this.endpoint + '/' + id);
    }
}
exports.ApiService = ApiService;

import { ApiClient } from "./api";

export class ApiService {

    client: ApiClient;
    endpoint: string;

    constructor(client: ApiClient, endpoint: string) {
        this.client = client;
        this.endpoint = endpoint;
    }

    async getAll() {
        return this.client.get<string>(this.endpoint)
    }

    // get single incident by id
    async getById(id: string) {
        return this.client.get<string>(this.endpoint+'/'+id)
    }

    // create new incident
    async create(incident: object) {
        return this.client.post<string>(this.endpoint, incident)
    }

    async update(id: string, incident: object) {
        return this.client.patch<string>(this.endpoint+'/'+id, incident)
    }

    async delete(id: string) {
        return this.client.delete<string>(this.endpoint+'/'+id)
    }
}


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkplaceService = exports.ApiService = void 0;
//RESTful service
class ApiService {
    constructor(client, endpoint) {
        this.client = client;
        this.endpoint = endpoint;
    }
}
exports.ApiService = ApiService;
class WorkplaceService extends ApiService {
    // async getAll():Promise<IWorkplace[]>{
    //     try{
    //         const data = await this.client.get(this.endpoint);
    //         const w[] :IWorkplace[] = JSON.parse(data)
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
    async getById(id) {
        let dto = await this.client.get(this.endpoint + "/" + id);
        console.log(typeof dto);
        return dto;
    }
    async create(workplace) {
        JSON.stringify(workplace);
        let dto = JSON.parse(await this.client.post(this.endpoint, JSON.stringify(workplace)));
        return dto;
    }
}
exports.WorkplaceService = WorkplaceService;
//Goal formatting
/*
    async getAll<T>():Promise<T> {
        return this.client.get<T>(this.endpoint)
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
*/ 

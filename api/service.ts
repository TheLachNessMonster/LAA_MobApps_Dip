import { inherits } from "util";
import { ApiClient } from "./api";
import { IWorkplace } from "../models/workplace";
import { NewApiClient } from "./newapi";


//RESTful service

export abstract class ApiService<T> {

    client: NewApiClient;
    endpoint: string;

    constructor(client: NewApiClient, endpoint: string) {
        this.client = client;
        this.endpoint = endpoint;
    }

    //abstract getAll(): Promise<T[]>;

    // get single incident by id
    abstract getById(id: string): Promise<T> //| null

    // create new incident
    abstract create(entity: T): Promise<T>

    //abstract update<T>(id: string, entity: Partial<T>): Promise<T>

    //abstract delete<T>(id: string): Promise<T>
}


export class WorkplaceService<IWorkplace> extends ApiService<IWorkplace> {

    // async getAll():Promise<IWorkplace[]>{
    //     try{
    //         const data = await this.client.get(this.endpoint);
    //         const w[] :IWorkplace[] = JSON.parse(data)
    //     }catch(err){
    //         console.log(err);
    //     }


    // }


    async getById(id: string): Promise<IWorkplace> {
        let dto = await this.client.get(this.endpoint + "/" + id) as IWorkplace
        console.log(typeof dto)
        return dto;
    }

    async create(workplace: IWorkplace):Promise<IWorkplace> {
        JSON.stringify(workplace);
        let dto = JSON.parse(await this.client.post(this.endpoint, JSON.stringify(workplace))) as IWorkplace
        return dto;
    }

}







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
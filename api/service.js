"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericService = void 0;
class GenericService {
    //ctor
    constructor(client, endpoint) {
        this.client = client;
        this.endpoint = endpoint;
    }
    //methods
    async getAll() {
        let dto = this.client.get(this.endpoint);
        let cleanDto = dto;
        return cleanDto;
    }
    async getById(id) {
        let dto = await this.client.get(this.endpoint + "/" + id);
        return dto;
    }
    async create(entity) {
        let dto = await this.client.post(this.endpoint, JSON.stringify(entity));
        return dto;
    }
    async update(id, entity) {
        let dto = await this.client.patch(this.endpoint + '/' + id, JSON.stringify(entity));
        return dto;
    }
    async delete(id) {
        let dto = this.client.delete(this.endpoint + '/' + id);
        return dto;
    }
}
exports.GenericService = GenericService;
//RESTful service
// export abstract class ApiService<T> {
//     client: NewApiClient;
//     endpoint: string;
//     constructor(client: NewApiClient, endpoint: string) {
//         this.client = client;
//         this.endpoint = endpoint;
//     }
//     abstract getAll(): Promise<T[]>;
//     // get single incident by id
//     abstract getById(id: string): Promise<T> //| null
//     // create new incident
//     abstract create(entity: T): Promise<T>
//     abstract update(id: string, entity: T): Promise<T>
//     abstract delete(id: string): Promise<T>
// }
// export class WorkplaceService<IWorkplace> extends ApiService<IWorkplace> {
//     // async getAll():Promise<IWorkplace[]>{
//     //     try{
//     //         const data = await this.client.get(this.endpoint);
//     //         const w[] :IWorkplace[] = JSON.parse(data)
//     //     }catch(err){
//     //         console.log(err);
//     //     }
//     // }
//     async getAll():Promise<IWorkplace[]> {
//         let dto = this.client.get(this.endpoint) as unknown;
//         let cleanDto = dto as IWorkplace[]
//         return cleanDto;
//     }
//     async getById(id: string): Promise<IWorkplace> {
//         let dto = await this.client.get(this.endpoint + "/" + id) as IWorkplace;
//         return dto;
//     }
//     async create(workplace: IWorkplace): Promise<IWorkplace> {
//         let dto = await this.client.post(this.endpoint, JSON.stringify(workplace)) as IWorkplace;
//         return dto;
//     }
//     async update(id: string, workplace: IWorkplace): Promise<IWorkplace> {
//         let dto = await this.client.patch(this.endpoint + '/' + id, JSON.stringify(workplace)) as IWorkplace;
//         return dto;
//     }
//     async delete(id: string):Promise<IWorkplace> {
//         let dto = this.client.delete(this.endpoint + '/' + id) as IWorkplace;
//         return dto;
//     }
// }
// export class UserService<IUser> extends ApiService<IUser> {
//     // async getAll():Promise<IWorkplace[]>{
//     //     try{
//     //         const data = await this.client.get(this.endpoint);
//     //         const w[] :IWorkplace[] = JSON.parse(data)
//     //     }catch(err){
//     //         console.log(err);
//     //     }
//     // }
//     async getAll():Promise<IUser[]> {
//         let dto = this.client.get(this.endpoint) as unknown;
//         let cleanDto = dto as IUser[]
//         return cleanDto;
//     }
//     async getById(id: string): Promise<IUser> {
//         let dto = await this.client.get(this.endpoint + "/" + id) as IUser;
//         return dto;
//     }
//     async create(workplace: IUser): Promise<IUser> {
//         let dto = await this.client.post(this.endpoint, JSON.stringify(workplace)) as IUser;
//         return dto;
//     }
//     async update(id: string, workplace: IUser): Promise<IUser> {
//         let dto = await this.client.patch(this.endpoint + '/' + id, JSON.stringify(workplace)) as IUser;
//         return dto;
//     }
//     //could define behaviour in a base class with a generic type, then for each do call base<type>???
//     async delete(id: string):Promise<IUser> {
//         let dto = this.client.delete(this.endpoint + '/' + id) as IUser;
//         return dto;
//     }
// }
// export class IncidentService<IIncedent> extends ApiService<IIncedent> {
//     // async getAll():Promise<IWorkplace[]>{
//     //     try{
//     //         const data = await this.client.get(this.endpoint);
//     //         const w[] :IWorkplace[] = JSON.parse(data)
//     //     }catch(err){
//     //         console.log(err);
//     //     }
//     // }
//     async getAll():Promise<IIncedent[]> {
//         let dto = this.client.get(this.endpoint) as unknown;
//         let cleanDto = dto as IIncedent[]
//         return cleanDto;
//     }
//     async getById(id: string): Promise<IIncedent> {
//         let dto = await this.client.get(this.endpoint + "/" + id) as IIncedent;
//         return dto;
//     }
//     async create(workplace: IIncedent): Promise<IIncedent> {
//         let dto = await this.client.post(this.endpoint, JSON.stringify(workplace)) as IIncedent;
//         return dto;
//     }
//     async update(id: string, workplace: IIncedent): Promise<IIncedent> {
//         let dto = await this.client.patch(this.endpoint + '/' + id, JSON.stringify(workplace)) as IIncedent;
//         return dto;
//     }
//     //could define behaviour in a base class with a generic type, then for each do call base<type>???
//     async delete(id: string):Promise<IIncedent> {
//         let dto = this.client.delete(this.endpoint + '/' + id) as IIncedent;
//         return dto;
//     }
// }
// //just have a generic service class???

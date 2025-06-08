"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
const service_1 = require("./service");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';
const apiClient = new api_1.ApiClient(API_BASE_URL);
const ws = new service_1.ApiService(apiClient, '/workplaces');
async function testfunc() {
    let readout = await ws.getAll();
    console.log(readout);
    // let readout2 = await us.getAllUsers();
    // console.log(readout2)
    // let workplaceObj = {name: "DataWorks", location: "Camperdown"}
    // let readout3 = await ws.createWorkplace(workplaceObj)
    // console.log(readout3)
}
testfunc();

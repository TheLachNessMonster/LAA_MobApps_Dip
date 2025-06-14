"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { ApiClient } from "./api";
const newapi_1 = require("./newapi");
const service_1 = require("./service");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';
const apiClient = new newapi_1.NewApiClient(API_BASE_URL);
const ws = new service_1.WorkplaceService(apiClient, '/workplaces');
async function testfunc() {
    let readout = await ws.getById("683ff1da9ee81d014e06f10d");
    console.log(readout);
    // let readout2 = await us.getAllUsers();
    // console.log(readout2)
    // let workplaceObj = {name: "DataWorks", location: "Camperdown"}
    // let readout3 = await ws.createWorkplace(workplaceObj)
    // console.log(readout3)
}
testfunc();

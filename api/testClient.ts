import { ApiClient } from "./api";
import {ApiService} from "./service";

import dotenv from 'dotenv';
dotenv.config();

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';

const apiClient = new ApiClient(API_BASE_URL)
const ws = new ApiService(apiClient, '/workplaces')

async function testfunc() {
    let readout = await ws.getAll();
    console.log(readout)

    // let readout2 = await us.getAllUsers();
    // console.log(readout2)

    // let workplaceObj = {name: "DataWorks", location: "Camperdown"}
    // let readout3 = await ws.createWorkplace(workplaceObj)
    // console.log(readout3)

}

testfunc();
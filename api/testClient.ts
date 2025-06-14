//import { ApiClient } from "./api";
import { IWorkplace } from "../models/workplace";
import { NewApiClient } from "./newapi";
import {GenericService} from "./service";

import dotenv from 'dotenv';
dotenv.config();

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';

const apiClient = new NewApiClient(API_BASE_URL)

const newWS = new GenericService<IWorkplace>(apiClient, '/workplaces')

async function testfunc() {
    //let readout = await ws.getById("683ff1da9ee81d014e06f10d");
    let readout = await newWS.getAll();
    console.log(readout)

    // let readout2 = await us.getAllUsers();
    // console.log(readout2)

    // let workplaceObj = {name: "DataWorks", location: "Camperdown"}
    // let readout3 = await ws.createWorkplace(workplaceObj)
    // console.log(readout3)

}

testfunc();
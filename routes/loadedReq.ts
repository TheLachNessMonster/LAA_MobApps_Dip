import { Request } from "express";
import mongoose from "mongoose";

export default interface loadedReq extends Request{
    payload?: mongoose.Document;
}

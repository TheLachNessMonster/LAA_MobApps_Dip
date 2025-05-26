import { Request, Response } from "express";
import mongoose from "mongoose";

export interface loadedReq extends Request{
    payload?: mongoose.Document;
}

export interface loadedRes extends Response{
    payload?: mongoose.Document;
}
import { Request, Response, NextFunction, RequestHandler } from "express";
import Person from "../models/person";
import { loadedReq, loadedRes } from "./loadedReqRes";



//CREATE
export const createPerson = (req: loadedReq, res: loadedRes, next: NextFunction) => {
    try {

    } catch (error) {
        next(error);
    }
}

//READ ALL
export const getPeople = async (req: loadedReq, res: loadedRes, next: NextFunction) => {
    try {
        console.log(req.body)
        res.
        const people = await Person.find()
        res.json(people)
    } catch (error) {
        next(error);
    }
}

//READ ONE
export const getPersonById = (req: loadedReq, res: loadedRes, next: NextFunction) => {
    try {
        res.json(req.payload);
    } catch (error) {
        next(error);
    }
}

//UPDATE 
export const updatePerson = (req: loadedReq, res: loadedRes, next: NextFunction) => {
    try {

    } catch (error) {
        next(error);
    }
}

//DELETE
export const deletePerson = (req: loadedReq, res: loadedRes, next: NextFunction) => {
    try {

    } catch (error) {
        next(error);
    }
}



//DRAW FROM DATABASE




//Loads the instance of a person searched by ID from DB into the req for passing through middleware, NOTE all req types must be loadedReq after this.
export const getPerson: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    let person;
    try {
        person = await Person.findById(req.params.id)
        if (person == null) {
            res.status(404).json({ message: 'Cannot find person with id ' + req.params.id });
            return;
        }
    } catch (err: any) {
        res.status(500).json({ message: err.message });
        return;
    }

    (req as loadedReq).payload = person;
    next()
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPerson = exports.deletePerson = exports.updatePerson = exports.getPersonById = exports.getPeople = exports.createPerson = void 0;
const person_1 = __importDefault(require("../models/person"));
//CREATE
const createPerson = (req, res, next) => {
    try {
    }
    catch (error) {
        next(error);
    }
};
exports.createPerson = createPerson;
//READ ALL
const getPeople = async (req, res, next) => {
    try {
        console.log(req.body);
        const people = await person_1.default.find();
        res.json(people);
    }
    catch (error) {
        next(error);
    }
};
exports.getPeople = getPeople;
//READ ONE
const getPersonById = (req, res, next) => {
    try {
        res.json(req.payload);
    }
    catch (error) {
        next(error);
    }
};
exports.getPersonById = getPersonById;
//UPDATE 
const updatePerson = (req, res, next) => {
    try {
    }
    catch (error) {
        next(error);
    }
};
exports.updatePerson = updatePerson;
//DELETE
const deletePerson = (req, res, next) => {
    try {
    }
    catch (error) {
        next(error);
    }
};
exports.deletePerson = deletePerson;
//DRAW FROM DATABASE
//Loads the instance of a person searched by ID from DB into the req for passing through middleware, NOTE all req types must be loadedReq after this.
const getPerson = async (req, res, next) => {
    let person;
    try {
        person = await person_1.default.findById(req.params.id);
        if (person == null) {
            res.status(404).json({ message: 'Cannot find person with id ' + req.params.id });
            return;
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
        return;
    }
    req.payload = person;
    next();
};
exports.getPerson = getPerson;

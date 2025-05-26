"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const peopleRouter = (0, express_1.Router)();
const person_js_1 = __importDefault(require("../models/person.js"));
//document is the name of the individual instance of a mongoose schema object (?)
//GET (ALL)
peopleRouter.get('/', async (req, res) => {
    console.log("BODY", req.body);
    try {
        const people = await person_js_1.default.find();
        res.json(people);
        //what type should error be here?
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
//GET (ID)
peopleRouter.get('/:id', async (req, res) => {
    res.send(req.params.id);
});
//CREATE
peopleRouter.post('/', async (req, res) => {
    //Instantiating a new person object to send to the database
    const person = new person_js_1.default({
        name: req.body.name,
        age: req.body.age,
        occupation: req.body.occupation
    });
    try {
        //explicit typing not required - purpose for typing is defining constraints - for function RETURN types, or making custom data forms
        const newPerson = await person.save();
        res.status(201).json(newPerson);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
//UPDATE
peopleRouter.patch('/:id', async (req, res) => {
    //pull object up from db by id
    //foreach field with truthy value in request, update that value in the entity
    //save entity back to database
});
//DELETE
async function getPerson(req, res, next) {
    let person;
    try {
        person = await person_js_1.default.findById(req.params.id);
        if (person == null) {
            return res.status(404).json({ message: 'Cannot find person with that id' });
        }
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.person = person;
    next();
}
exports.default = peopleRouter;
/*
With this model, we create an interface to extend the request object to contain the person searched for by id, then pass it through a series of middleware functions
Alternatively, we could find by id when necessary in each request.

What are the advantages of the middleware model?
- Extensibility - by manipulating the request object we can extend what is worked on throughout middleware
- Reusability - by utilising a generics structure we can have an appropriate extended request for each object type in the DB


interface CustomRequest<T> extends Request {
  payload?: typeof <T>>
}
preserves data of the original request and allows type safety when tracking entity
*/

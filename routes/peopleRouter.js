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
        const newPerson = await person.save();
        res.status(201).json(newPerson);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
//UPDATE
//DELETE
exports.default = peopleRouter;

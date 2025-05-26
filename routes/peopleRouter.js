"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const peopleRouter = (0, express_1.Router)();
const person_js_1 = require("../models/person.js");
//document is the name of the individual instance of a mongoose schema object (?)
//GET (ALL)
peopleRouter.get('/', async (req, res) => {
    console.log("BODY", req.body);
    try {
        const people = await person_js_1.Person.find();
        res.json(people);
        //what type should error be here?
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
// GET (ID)
peopleRouter.get('/:id', async (req, res) => {
    const person = await person_js_1.Person.findById(req.params.id);
    res.json(person);
});
// CREATE
peopleRouter.post('/', async (req, res) => {
    //Instantiating a new person object to send to the database
    const person = new person_js_1.Person({
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
// UPDATE
//Patch works once, but get "cannot set headers after they are sent to the client"
peopleRouter.patch('/:id', async (req, res) => {
    try {
        const person = await person_js_1.Person.findById(req.params.id);
        if (person) {
            if (req.body.name != null) {
                person.name = req.body.name;
            }
            if (req.body.age != null) {
                person.age = req.body.age;
            }
            if (req.body.occupation != null) {
                person.occupation = req.body.occupation;
            }
            const patchedPerson = await person.save();
            res.json(patchedPerson);
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
// DELETE
peopleRouter.delete('/:id', async (req, res) => {
    await person_js_1.Person.findByIdAndDelete(req.params.id);
    res.json({ message: "Deletion successful" });
});
exports.default = peopleRouter;
// //Loads the instance of a person searched by ID from DB into the req for passing through middleware, NOTE all req types must be loadedReq after this.
// export const getPerson: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
//     let person;
//     try {
//         person = await Person.findById(req.params.id)
//         if (person == null) {
//             res.status(404).json({ message: 'Cannot find person with id ' + req.params.id });
//             return;
//         }
//     } catch (err: any) {
//         res.status(500).json({ message: err.message });
//         return;
//     }
//     (req as loadedReq).payload = person;
//     next()
// }

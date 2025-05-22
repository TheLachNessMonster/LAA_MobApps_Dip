import {Request, Response, Router } from 'express';

const peopleRouter:Router = Router();

import Person from '../models/person.js';
import mongoose from 'mongoose';
//document is the name of the individual instance of a mongoose schema object (?)



//GET (ALL)
peopleRouter.get('/', async (req:Request, res:Response)=>{
    console.log("BODY", req.body);
    try{
        const people: mongoose.Document[] = await Person.find();
        res.json(people);
    //what type should error be here?
    }catch(err:any){
        res.status(500).json({message:err.message})
    }
})


//GET (ID)
peopleRouter.get('/:id', async (req:Request, res:Response)=>{
    res.send(req.params.id)
})


//CREATE
peopleRouter.post('/', async (req: Request, res: Response) => {
    
    //Instantiating a new person object to send to the database
    const person : mongoose.Document = new Person({
        name: req.body.name,
        age: req.body.age,
        occupation: req.body.occupation
    })

    try {
        const newPerson :mongoose.Document = await person.save()
        res.status(201).json(newPerson)
    } catch (err:any) {
        res.status(400).json({ message: err.message })
    }
})

//UPDATE


//DELETE

export default peopleRouter;
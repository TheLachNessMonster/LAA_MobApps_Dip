import {NextFunction, Request, Response, Router } from 'express';

const peopleRouter:Router = Router();

import Person from '../models/person.js';
import mongoose from 'mongoose';
import loadedReq from './loadedReq.js';
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
peopleRouter.get('/:id', getPerson, async (req:loadedReq, res:Response)=>{
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
        //explicit typing not required - purpose for typing is defining constraints - for function RETURN types, or making custom data forms
        const newPerson :mongoose.Document = await person.save()
        res.status(201).json(newPerson)
    } catch (err:any) {
        res.status(400).json({ message: err.message })
    }
})

//UPDATE
peopleRouter.patch('/:id', async (req:Request, res:Response)=>{ 
    //pull object up from db by id
    //foreach field with truthy value in request, update that value in the entity
    //save entity back to database


        
    

})

//DELETE





//Loads the instance of a person searched by ID from DB into the req for passing through middleware, NOTE all req types must be loadedReq after this.
async function getPerson(req: loadedReq, res: Response, next: NextFunction) {
    let person;
    try {
        person = await Person.findById(req.params.id)
        if (person == null) {
            return res.status(404).json({ message: 'Cannot find person with id ' + req.params.id })
        }
    } catch (err: any) {
        return res.status(500).json({ message: err.message })
    }

    req.payload = person;
    next()
}





export default peopleRouter;









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

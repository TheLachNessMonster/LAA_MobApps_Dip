//Serving funtionality


//Import syntax: import x from 'y' - x is the local variable name we give the default export of y.  For express, that is the function express()
//which creates the express app.
import express from 'express';
import mongoose, { Connection } from 'mongoose';
import dotenv from 'dotenv';

const app = express();

dotenv.config();



//DB connection init

//Passes an undefined string - should really use try/catch error handling
mongoose.connect(process.env.DATABASE_URL||"UNDEFINED");

//Explicitly typing db as an exercise in type tracking and exploring module documentation
const db : Connection = mongoose.connection;

//Function usage does not require typing here as the types are declared in definition
//You can see it returns type 'this' which is the EventEmmiter interface - using f12 to track type definitions is useful when you want to
//determine return types.
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to DB'));


//Server listening spinup

import peopleRouter from './routes/peopleRouter';

//mount goated express.json middleware
app.use(express.json())
app.use('/people', peopleRouter)
//Sample URL: localhost3000/people

app.listen(3000, ()=>console.log("Server running"));
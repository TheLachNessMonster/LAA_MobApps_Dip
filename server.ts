
//express start
import express from 'express'
const app = express();



//env config
import dotenv from 'dotenv';
dotenv.config();



import mongoose from 'mongoose'

mongoose.connect(process.env.DATABASE_URL||"UNDEFINED");
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to DB'));




//express server init

import peopleRouter from './routes/peopleRouter';

app.use(express.json())
app.use('/people', peopleRouter)
//Sample URL: localhost3000/people

app.listen(3000, ()=>console.log("Server running"));
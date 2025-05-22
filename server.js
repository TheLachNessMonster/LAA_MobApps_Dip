"use strict";
//Serving funtionality
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Import syntax: import x from 'y' - x is the local variable name we give the default export of y.  For express, that is the function express()
//which creates the express app.
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
//DB connection init
//Passes an undefined string - should really use try/catch error handling
mongoose_1.default.connect(process.env.DATABASE_URL || "UNDEFINED");
//Explicitly typing db as an exercise in type tracking and exploring module documentation
const db = mongoose_1.default.connection;
//Function usage does not require typing here as the types are declared in definition
//You can see it returns type 'this' which is the EventEmmiter interface - using f12 to track type definitions is useful when you want to
//determine return types.
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to DB'));
//Server listening spinup
const peopleRouter_1 = __importDefault(require("./routes/peopleRouter"));
//mount goated express.json middleware
app.use(express_1.default.json());
app.use('/people', peopleRouter_1.default);
//Sample URL: localhost3000/people
app.listen(3000, () => console.log("Server running"));

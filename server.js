"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//express start
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//env config
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect(process.env.DATABASE_URL || "UNDEFINED");
const db = mongoose_1.default.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to DB'));
//express server init
const peopleRouter_1 = __importDefault(require("./routes/peopleRouter"));
app.use(express_1.default.json());
app.use('/people', peopleRouter_1.default);
//Sample URL: localhost3000/people
app.listen(3000, () => console.log("Server running"));

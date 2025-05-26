"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config/config"));
const mongoose_1 = __importDefault(require("mongoose"));
//Passes an undefined string - should really use try/catch error handling
mongoose_1.default.connect(config_1.default.dbConstring);
const db = mongoose_1.default.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to DB'));
app_1.default.listen(config_1.default.port, () => {
    console.log('server running on port ' + config_1.default.port);
});

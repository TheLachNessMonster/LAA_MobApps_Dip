"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const peopleRouter_1 = __importDefault(require("./routes/peopleRouter"));
const errorHandler_1 = require("./middlewares/errorHandler");
const app = (0, express_1.default)();
//API CONFIG
app.use(express_1.default.json());
//ROUTING
app.use('/api/people', peopleRouter_1.default);
//Global error handler
app.use(errorHandler_1.errorHandler);
exports.default = app;

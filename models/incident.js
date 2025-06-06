"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incident = void 0;
const mongoose_1 = __importStar(require("mongoose"));
;
const IncedentSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    photoPath: { type: String },
    reportedBy: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    workplaceId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Workplace',
        required: true
    },
    //make strict required (?)
    status: {
        type: String,
        set: statusDefault,
    },
    //make strict required (?) 
    createdAt: {
        type: Date,
        set: createdAtDefault
        //set: createdAtDefault
    },
    riskLevel: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Low'
    }
});
function createdAtDefault(input) {
    if (input === "") {
        return new Date();
    }
    else {
        //Add date validation here
        return Date.parse(input);
    }
}
function statusDefault(input) {
    if (input === "") {
        return "Open";
    }
    else {
        return input;
    }
}
//ES TS export default
exports.Incident = (0, mongoose_1.model)('Incident', IncedentSchema);

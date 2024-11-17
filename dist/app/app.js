"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express = require('express')
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
// middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// use query
app.get('/', logger, (req, res) => {
    console.log(req.query.name);
    res.send('Hello level-1 web developers!');
});
// use params
// app.get('/:userId/:subId', (req: Request, res: Response) => {
//     console.log(req.params.subId);
//     res.send('Hello level-1 web developers!')
// })
// use body
app.post('/', logger, (req, res) => {
    console.log(req.body);
    // res.send('okay got it')
    res.json({
        message: "Successfully received data"
    });
});
exports.default = app;

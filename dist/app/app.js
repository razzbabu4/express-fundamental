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
// routers
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
// parser for router
app.use('/api/v1/users', userRouter);
app.use("/api/v1/courses", courseRouter);
userRouter.post('/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "Successfully created user",
        data: user
    });
});
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "Successfully created course",
        data: course
    });
});
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

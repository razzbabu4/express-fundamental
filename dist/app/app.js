"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// error handling using try-catch
app.get('/error', logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(something);
    }
    catch (error) {
        next(error);
        // res.status(400).json({
        //     success: false,
        //     message: "failed to load"
        // })
    }
}));
// route error handle for all method
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Not found"
    });
});
// global error handling
app.use((error, req, res, next) => {
    // console.log(error);
    if (error) {
        res.status(400).json({
            success: false,
            message: "Can not process"
        });
    }
});
exports.default = app;

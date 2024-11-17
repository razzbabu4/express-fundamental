import express, { NextFunction, Request, Response } from 'express'
// const express = require('express')
const app = express()

// parsers
app.use(express.json())
app.use(express.text())

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method, req.hostname);
    next();
}

// routers
const userRouter = express.Router();
const courseRouter = express.Router();

// parser for router
app.use('/api/v1/users', userRouter);
app.use("/api/v1/courses", courseRouter);

userRouter.post('/create-user', (req: Request, res: Response) => {
    const user = req.body;
    console.log(user);

    res.json({
        success: true,
        message: "Successfully created user",
        data: user
    })
})

courseRouter.post("/create-course", (req: Request, res: Response) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "Successfully created course",
        data: course
    })
})









// use query
app.get('/', logger, (req: Request, res: Response) => {
    console.log(req.query.name);
    res.send('Hello level-1 web developers!')
})

// use params
// app.get('/:userId/:subId', (req: Request, res: Response) => {
//     console.log(req.params.subId);
//     res.send('Hello level-1 web developers!')
// })

// use body
app.post('/', logger, (req: Request, res: Response) => {
    console.log(req.body);
    // res.send('okay got it')
    res.json({
        message: "Successfully received data"
    })
})

export default app;
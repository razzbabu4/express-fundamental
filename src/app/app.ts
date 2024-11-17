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
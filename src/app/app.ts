import express, { Request, Response } from 'express'
// const express = require('express')
const app = express()

// parsers
app.use(express.json())
app.use(express.text())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello level-1 web developers!')
})

app.post('/', (req: Request, res: Response) => {
    console.log(req.body);
    // res.send('okay got it')
    res.json({
        message : "Successfully received data"
    })
})

export default app;
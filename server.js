#!/usr/bin/env node

import express from 'express';
import minimist from 'minimist';
import { roll } from './lib/roll.js';


const args = minimist(process.argv.slice(2));
const app = express();
app.use(express.urlencoded({ extended: true }));

const port = args.port || 5000;

// requirement #3
app.get('/app/', (req, res) => {
    res.status(200).send('200 OK');
});

// requirement #4
app.get('/app/roll/', (req, res) => {
    res.status(200).send(roll(6,2,1));
});

// requirement #5
app.post('/app/roll/', (req, res) =>{
    const sides = parseInt(req.body.sides);
    const dice = parseInt(req.body.dice);
    const rolls = parseInt(req.body.rolls);
    
    res.status(200).send(roll(sides, dice, rolls));
})

// requirement #6
app.get('/app/roll/:sides/', (req, res) =>{
    const sides = parseInt(req.params.sides);
    res.status(200).send(roll(sides, 2, 1));
})


//requirement #7
app.get('/app/roll/:sides/:dice', (req, res) =>{
    const sides = parseInt(req.params.sides);
    const dice = parseInt(req.params.dice);
    res.status(200).send(roll(sides, dice, 1));
})

//requirement #8
app.get('/app/roll/:sides/:dice/:rolls/', (req, res) =>{
    const sides = parseInt(req.params.sides);
    const dice = parseInt(req.params.dice);
    const rolls = parseInt(req.params.rolls);
    res.status(200).send(roll(sides, dice, rolls));
})

app.use((req, res) => {
	res.status(404).send("404 NOT FOUND");
});

app.listen(port);
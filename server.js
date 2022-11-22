#!/usr/bin/env node

// import required dependencies
import express from 'express';
import minimist from 'minimist';
import { roll } from './lib/roll.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
const args = minimist(process.argv.slice(2));


  const port = args.port || 5000;


  app.get('/app/', (req, res) => {
    res.send("200 OK");
  });


  app.get("/app/roll/", (req, res) => {
    console.log(roll(6, 2, 1));
    res.send(roll(6, 2, 1));
  });


  app.post('/app/roll/', (req, res) => {
    const sides = parseInt(req.body.sides);
    const dice = parseInt(req.body.dice);
    const rolls = parseInt(req.body.rolls);
    console.log(roll(sides, dice, rolls));
    res.send(roll(sides, dice, rolls));
  });

  // #6
  app.get('/app/roll/:sides/', (req, res) => {
    const sides = parseInt(req.params.sides);
    console.log(roll(sides, 2, 1));
    res.send(roll(sides, 2, 1));
  });


  app.get('/app/roll/:sides/:dice/', (req, res) => {
    const sides = parseInt(req.params.sides);
    const dice = parseInt(req.params.dice);
    console.log(roll(sides, dice, 1));
    res.send(roll(sides, dice, 1));
  });


  app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    const sides =  parseInt(req.params.sides);
    const dice = parseInt(req.params.dice);
    const rolls = parseInt(req.params.rolls);
    console.log(roll(sides, dice, rolls));
    res.send((roll(sides, dice, rolls)));
  });

  
  app.get("*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
  });

  app.listen(port);

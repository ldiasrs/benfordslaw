# benfordslaw

[![Build Status](https://cloud.drone.io/api/badges/CMiksche/benfordslaw/status.svg)](https://cloud.drone.io/CMiksche/benfordslaw)
[![npm version](https://badge.fury.io/js/benfordslaw.svg)](https://badge.fury.io/js/benfordslaw)
![npm](https://img.shields.io/npm/dm/benfordslaw)
![Coverage Branches](./coverage/badge-branches.png)
![Coverage Lines](./coverage/badge-lines.png)
![Coverage Functions](./coverage/badge-functions.png)
![Coverage Statements](./coverage/badge-statements.png)

Check if a number array confirms to the Benford's Law

Heavily inspired by https://github.com/target/huntlib

## Install

    npm i benfordslaw

## Usage

Look at the tests for good examples.

E.g.:

    import { BenfordsLaw } from 'benfordslaw';

    const numbers = [1,2,3,4,5,6,7,8,9];
    const benfords = new BenfordsLaw(numbers);

    const chiSquared = benfords.getChiSquared();
    // chiSquared = 0.40105320411553363
    const probability = benfords.getProbability()?.toFixed(5);
    // probability = 0.99994

The ChiSquared result is a float between 0 and 1 and describes how well Benford's Law was matched. Lower is better.

The Probability describes how relevant ChiSquared is. It should be >= 0.9

getDist() returns the distribution of the numbers.

## Why TypeScript

With Types TypeScript adds a extra layer of security. I also use mainly TypeScript projects with this project so TypeScript just makes sense.
And TS also compiles to JavaScript Code so JS projects also can use it. 

## General Information

License: MIT

Author: Christoph Daniel Miksche

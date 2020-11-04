# 🇺🇦 HELP UKRAINE

GOOD EVENING WE ARE FROM UKRAINE.

We fight for democratic values, for freedom, for our future. We need your support. 
There are dozen ways to help us, [JUST DO IT](https://github.com/pinchukdiana/help-ua#-%D1%87%D0%B0%D1%82-%D0%B1%D0%BE%D1%82%D0%B8--chat-bots).

[![Build Status](https://travis-ci.org/dmytropaduchak/simple-linear-interpolation.svg?branch=master)](https://travis-ci.org/dmytropaduchak/simple-linear-interpolation)
[![Coverage Status](https://coveralls.io/repos/github/dmytropaduchak/simple-linear-interpolation/badge.svg?branch=master)](https://coveralls.io/github/dmytropaduchak/simple-linear-interpolation?branch=master)
[![NPM Version](https://badge.fury.io/js/simple-linear-interpolation.svg)](http://badge.fury.io/js/simple-linear-interpolation?type=dev)

# Simple Linear Interpolation

A simple interpolation module that construct new data points within the range of a discrete set of known data points.
Linear Interpolation [EXAMPLE](https://dmytropaduchak.github.io/simple-interpolation-example#linear).

## Installation 

You can install this package using NPM:

```sh
npm i @dmytropaduchak/simple-linear-interpolation --save
```

## How use

Simple example JavaScript / TypeScript:

```JavaScript
import { linearInterpolation } from "@dmytropaduchak/simple-linear-interpolation";

const points = [{ x: 1, y: 1}, { x: 2, y: 2 }];
const calculate = linearInterpolation(points);

calculate({ x: 1.5 }); // y -> 1.5
calculate({ y: 1.5 }); // x -> 1.5
```

## Unit testing

For run unit tests, use:

```
npm run test
```

All unit test report you can find at `report/` folder.

For run test at watch mode, use:

```
npm run test:dev
```


## Linting

For check eslint rules, use:

```
npm run lint
```

For auto fix all eslint bugs, use:

```
npm run lint:fix
```


## License
Except where noted otherwise, files are licensed under the MIT License.


## Information

- [Linear interpolation](https://en.wikipedia.org/wiki/Linear_interpolation).

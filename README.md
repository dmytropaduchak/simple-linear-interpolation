[![Build Status](https://travis-ci.org/dmytropaduchak/simple-linear-interpolation.svg?branch=master)](https://travis-ci.org/dmytropaduchak/simple-linear-interpolation)
[![Coverage Status](https://coveralls.io/repos/github/dmytropaduchak/simple-linear-interpolation/badge.svg?branch=master)](https://coveralls.io/github/dmytropaduchak/simple-linear-interpolation?branch=master)
[![NPM Version](https://badge.fury.io/js/simple-interpolation.svg)](http://badge.fury.io/js/simple-linear-interpolation)simple-linear-interpolation?type=dev)  

# Simple Linear Interpolation

A simple interpolation module that construct new data points within the range of a discrete set of known data points.
Linear Interpolation [EXAMPLE](https://dmytropaduchak.github.io/simple-interpolation-example#linear).

## Installation 

You can install this package using NPM:

```sh
npm i simple-linear-interpolation --save
```

## How use

```
  Simple Schema of Single interpolation

  ---|---|
  x1 |y1 |
  ---|---|
   x | y |
  ---|---|
  x2 |y2 |
  ---|---|
```

Simple using way, JavaScript / TypeScript

```typescript
import { linearInterpolation } from "simple-linear-interpolation";

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

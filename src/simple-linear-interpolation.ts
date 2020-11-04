import { LinearInterpolationFunction, LinearInterpolationPoint } from './simple-linear-interpolation.definition';

const MATRIX_LENGTH = 2;

const isZero = (num: number): boolean => num === 0;

/**
 * Implementation of linear interpolation
 * @param {array} points interpolation matrix data
 * @return {function} interpolation execute function
 */
export function linearInterpolation(points: LinearInterpolationPoint[]): LinearInterpolationFunction {
  if (points.length <= MATRIX_LENGTH - 1) {
    throw new Error("Can't calculate linear interpolation, please provide more points");
  }
  return (params: Partial<LinearInterpolationPoint>): number => {
    let coordinate: number;
    let coordinates: number[][];

    if ('x' in params) {
      coordinate = params.x;
      coordinates = points.sort((a, b) => a.x - b.x).map((i) => [i.x, i.y]);
    }
    if ('y' in params) {
      coordinate = params.y;
      coordinates = points.sort((a, b) => a.y - b.y).map((i) => [i.y, i.x]);
    }

    if (!coordinate && !isZero(coordinate)) {
      throw new Error("Can't calculate linear interpolation");
    }

    if (coordinate <= coordinates[0][0]) {
      return (
        coordinates[0][1] +
        ((coordinate - coordinates[0][0]) * (coordinates[1][1] - coordinates[0][1])) /
          (coordinates[1][0] - coordinates[0][0])
      );
    }

    const n = coordinates.length - 1;
    if (coordinate >= coordinates[n][0]) {
      return (
        coordinates[n][1] +
        ((coordinate - coordinates[n][0]) * (coordinates[n][1] - coordinates[n - 1][1])) /
          (coordinates[n][0] - coordinates[n - 1][0])
      );
    }

    for (let i = 0; i < n; i += 1) {
      if (coordinate > coordinates[i][0] && coordinate <= coordinates[i + 1][0]) {
        return (
          coordinates[i][1] +
          ((coordinate - coordinates[i][0]) * (coordinates[i + 1][1] - coordinates[i][1])) /
            (coordinates[i + 1][0] - coordinates[i][0])
        );
      }
    }

    throw new Error("Can't calculate linear interpolation");
  };
}

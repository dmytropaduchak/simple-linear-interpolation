/** Linear Interpolation Point Interface */
export interface LinearInterpolationPoint {
  x: number;
  y: number;
}

/** Linear Interpolation Function Type */
export type LinearInterpolationFunction = (params: Partial<LinearInterpolationPoint>) => number;

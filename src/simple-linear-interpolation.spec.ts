import { linearInterpolation } from './simple-linear-interpolation';
import { LinearInterpolationPoint } from './simple-linear-interpolation.definition';

describe('src/simple-linear-interpolation.ts', () => {
  const points: LinearInterpolationPoint[] = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
  ];

  it('should do extrapolation `x` variable by parameters equal matrix data', () => {
    const params = { x: 2 };
    const calculator = linearInterpolation(points);
    expect(calculator(params)).toEqual(2);
  });

  it('should do extrapolation `x` variable by parameters between matrix data', () => {
    const params = { x: 1.5 };
    const calculator = linearInterpolation(points);
    expect(calculator(params)).toEqual(1.5);
  });

  it('should do extrapolation `y` variable by parameters equal matrix data', () => {
    const params = { y: 2 };
    const calculator = linearInterpolation(points);
    expect(calculator(params)).toEqual(2);
  });

  it('should do extrapolation `y` variable by parameters between matrix data', () => {
    const params = { y: 1.5 };
    const calculator = linearInterpolation(points);
    expect(calculator(params)).toEqual(1.5);
  });

  it('should do left extrapolation `x` variable', () => {
    const params = { x: -1.5 };
    const calculator = linearInterpolation(points);
    expect(calculator(params)).toEqual(-1.5);
  });

  it('should do left extrapolation `y` variable', () => {
    const params = { y: -1.5 };
    const calculator = linearInterpolation(points);
    expect(calculator(params)).toEqual(-1.5);
  });

  it('should do right extrapolation `x` variable', () => {
    const params = { x: 3 };
    const calculator = linearInterpolation(points);
    expect(calculator(params)).toEqual(3);
  });

  it('should do right extrapolation `y` variable', () => {
    const params = { y: 3 };
    const calculator = linearInterpolation(points);
    expect(calculator(params)).toEqual(3);
  });

  it('should throw extrapolation error if incorrect matrix data', () => {
    expect(() => {
      linearInterpolation([{ x: 1, y: 1 }])({ x: 1.5 });
    }).toThrowError("Can't calculate linear interpolation, please provide more points");
  });

  it('should throw extrapolation error if incorrect value of `x` or `y`', () => {
    expect(() => {
      const params = { z: 1.5 } as any;
      const calculator = linearInterpolation(points);
      calculator(params);
    }).toThrowError("Can't calculate linear interpolation");
  });

  it('should throw extrapolation error if incorrect matrix value', () => {
    expect(() => {
      const params = { x: 1.5 };
      const calculate = linearInterpolation([{ a: 1 }, { b: 2 }] as any);
      calculate(params);
    }).toThrowError("Can't calculate linear interpolation");
  });

  describe('zero calculation', () => {
    it('should do right extrapolation `x` variable', () => {
      const params = { x: 0 };
      const calculator = linearInterpolation([
        { x: -1, y: -1 },
        { x: 1, y: 1 },
      ]);
      expect(calculator(params)).toEqual(0);
    });

    it('should do right extrapolation `x` variable by parameters equal matrix data', () => {
      const params = { x: 0 };
      const calculator = linearInterpolation([
        { x: 0, y: 0 },
        { x: 1, y: 1 },
      ]);
      expect(calculator(params)).toEqual(0);
    });
  });
});

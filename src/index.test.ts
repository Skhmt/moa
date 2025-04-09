import { expect, it, describe } from 'vitest';
import * as moa from './index';

describe('meters to yards', () => {
	it('should convert meters to yards', () => {
		expect(moa.m2yd(1)).toBeCloseTo(1.09361, 5);
	});

	it('should convert yards to meters', () => {
		expect(moa.yd2m(1)).toBeCloseTo(0.91440, 5);
	});
});

describe('meters to centimeters', () => {
	it('should convert meters to centimeters', () => {
		expect(moa.m2cm(1)).toBe(100);
	});

	it('should convert centimeters to meters', () => {
		expect(moa.cm2m(1)).toBe(0.01);
	})
});

describe('meters to feet', () => {
	it('should convert meters to feet', () => {
		expect(moa.m2ft(1)).toBeCloseTo(3.28084, 5);
	});

	it('should convert feet to meters', () => {
		expect(moa.ft2m(1)).toBeCloseTo(0.30480, 5);
	});
});

describe('meters to inches', () => {
	it('should convert meters to inches', () => {
		expect(moa.m2in(1)).toBeCloseTo(39.37008, 5);
	});

	it('should convert inches to meters', () => {
		expect(moa.in2m(1)).toBeCloseTo(0.02540, 5);
	})
});

describe('meters to miles', () => {
	it('should convert meters to miles', () => {
		expect(moa.m2mi(100)).toBeCloseTo(0.0621371, 5);
	});

	it('should convert miles to meters', () => {
		expect(moa.mi2m(2)).toBeCloseTo(3218.688, 5);
	})
});

describe('meters to km', () => {
	it('should convert meters to km', () => {
		expect(moa.m2km(500)).toBeCloseTo(0.5, 5);
	});

	it('should convert km to meters', () => {
		expect(moa.km2m(2)).toBeCloseTo(2000, 5);
	})
});

describe('angle conversions', () => {
	it('should convert moa to milliradians', () => {
		expect(moa.moa2mrad(1)).toBeCloseTo(0.29089, 5);
	});

	it('should convert milliradians to moa', () => {
		expect(moa.mrad2moa(1)).toBeCloseTo(3.43775, 5);
	});
});

describe('find distance given known size', () => {
	it('should find the distance given size and mils', () => {
		expect(moa.distance(2, 4)).toBeCloseTo(500, 2);
	});

	it('should throw an error with negative distance', () => {
		expect(() => moa.distance(-2, 4)).toThrow('negative');
	});

	it('should throw an error with negative angle', () => {
		expect(() => moa.distance(2, -4)).toThrow('negative');
	});
});

describe('find size given known distance', () => {
	it('should find the size given distance and mils', () => {
		expect(moa.size(500, 4)).toBeCloseTo(2, 2);
	});

	it('should throw an error with negative size', () => {
		expect(() => moa.size(-500, 4)).toThrow('negative');
	});

	it('should throw an error with negative angle', () => {
		expect(() => moa.size(500, -4)).toThrow('negative');
	});
});
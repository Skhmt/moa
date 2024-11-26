const moaPerCircle: number = 21600; // 360*60
const mradPerCircle: number = 6283.185307179586; // 2*Math.PI*1000

// binds num to range [0, x) - useful for things like [0, 360) degrees
const bindToX = (num: number, x: number): number => ((num % x) + x) % x;

// unit conversions to/from meters
const metersPerYard = 0.9144; // the exact definition of a yard. 24 FR 5348 (1959).
export const m2yd = (meters: number): number => (meters / metersPerYard);
export const yd2m = (yards: number): number => (yards * metersPerYard);

const metersPerFoot = 0.3048; // 0.9144m/1yd * 1yd/3ft
export const m2ft = (meters: number): number => (meters / metersPerFoot);
export const ft2m = (feet: number): number => (feet * metersPerFoot);

const metersPerInch = 0.0254; // 0.9144m/1yd * 1yd/3ft * 1ft/12in
export const m2in = (meters: number): number => (meters / metersPerInch);
export const in2m = (inches: number): number => (inches * metersPerInch);

// by definition of a cm
export const m2cm = (meters: number): number => (meters * 100);
export const cm2m = (cm: number): number => (cm / 100);

/**
 * Converts minutes of angle/arc to milliradians.
 *
 * @param moa - The angle in minutes of angle/arc.
 * @returns The equivalent angle in milliradians.
 */
export function moa2mrad(moa: number): number {
	return bindToX(moa, moaPerCircle) * mradPerCircle / moaPerCircle;
}

/**
 * Converts milliradians to minutes of angle/arc.
 *
 * @param mrad - The angle in milliradians.
 * @returns The equivalent angle in minutes of angle/arc (MOA).
 */
export function mrad2moa(mrad: number): number {
	return bindToX(mrad, mradPerCircle) * moaPerCircle / mradPerCircle;
}

/**
 * Given a size and angle, return the distance at which that size
 * subtends the given angle.
 *
 * @param size - The size of the target in any unit measurement.
 * @param mrad - The angle in milliradians that the target subtends.
 * @returns The distance at which the target subtends the given angle in the same units as `size`.
 * @throws {Error} If the size is negative.
 * @throws {Error} If the mrad is negative.
 */
export function distance(size: number, mrad: number): number {
	if (size < 0) throw new Error('size cannot be negative');
	if (mrad < 0) throw new Error('angular measures cannot be negative');
	return 1000 * size / bindToX(mrad, mradPerCircle);
}

/**
 * Calculates the size of a target, given the distance and the angle
 * in milliradians that the target subtends.
 *
 * @param distance - The distance to the target in any unit measurement.
 * @param mrad - The angle in milliradians that the target subtends.
 * @returns The size of the target in the same units as `distance`.
 * @throws {Error} If the distance is negative.
 * @throws {Error} If the mrad is negative.
 */
export function size(distance: number, mrad: number): number {
	if (distance < 0) throw new Error('distance cannot be negative');
	if (mrad < 0) throw new Error('angular measures cannot be negative');
	return distance * bindToX(mrad, mradPerCircle) / 1000;
}
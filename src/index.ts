const moaPerCircle: number = 21600; // 360*60
const mradPerCircle: number = 6283.185307179586; // 2*Math.PI*1000

// binds num to range [0, x) - useful for things like [0, 360) degrees
const bindToX = (num: number, x: number): number => ((num % x) + x) % x;

// unit conversions to/from meters
const metersPerYard = 0.9144; // the exact definition of a yard. 24 FR 5348 (1959).
const metersPerFoot = 0.3048; // 0.9144m/1yd * 1yd/3ft
const metersPerInch = 0.0254; // 0.9144m/1yd * 1yd/3ft * 1ft/12in

/**
 * Converts meters to yards.
 *
 * @param meters - The length in meters.
 * @returns The equivalent length in yards.
 */
export function m2yd(meters: number): number {
	return meters / metersPerYard;
}

/**
 * Converts yards to meters.
 *
 * @param yards - The length in yards.
 * @returns The equivalent length in meters.
 */
export function yd2m(yards: number): number {
	return yards * metersPerYard;
}

/**
 * Converts meters to feet.
 *
 * @param meters - The length in meters.
 * @returns The equivalent length in feet.
 */
export function m2ft(meters: number): number {
	return meters / metersPerFoot;
}

/**
 * Converts feet to meters.
 *
 * @param feet - The length in feet.
 * @returns The equivalent length in meters.
 */
export function ft2m(feet: number): number {
	return feet * metersPerFoot;
}

/**
 * Converts meters to inches.
 *
 * @param meters - The length in meters.
 * @returns The equivalent length in inches.
 */

export function m2in(meters: number): number {
	return meters / metersPerInch;
}

/**
 * Converts inches to meters.
 *
 * @param inches - The length in inches.
 * @returns The equivalent length in meters.
 */
export function in2m(inches: number): number {
	return inches * metersPerInch;
}

/**
 * Converts meters to centimeters.
 *
 * @param meters - The length in meters.
 * @returns The equivalent length in centimeters.
 */

export function m2cm(meters: number): number {
	return meters * 100;
}

/**
 * Converts centimeters to meters.
 *
 * @param cm - The length in centimeters.
 * @returns The equivalent length in meters.
 */
export function cm2m(cm: number): number {
	return cm / 100;
}

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
 * This uses the actual math, not an approximation.
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
	// return 1000 * size / bindToX(mrad, mradPerCircle); // an approximation, not technically correct
	return size / Math.tan(bindToX(mrad, mradPerCircle) / 1000);
}

/**
 * Calculates the size of a target, given the distance and the angle
 * in milliradians that the target subtends.
 * 
 * This uses the actual math, not an approximation.
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
	// return distance * bindToX(mrad, mradPerCircle) / 1000; // an approximation, not technically correct
	return distance * Math.tan(bindToX(mrad, mradPerCircle) / 1000);
}
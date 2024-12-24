/**
 * Converts meters to yards.
 *
 * @param meters - The length in meters.
 * @returns The equivalent length in yards.
 */
declare function m2yd(meters: number): number;
/**
 * Converts yards to meters.
 *
 * @param yards - The length in yards.
 * @returns The equivalent length in meters.
 */
declare function yd2m(yards: number): number;
/**
 * Converts meters to feet.
 *
 * @param meters - The length in meters.
 * @returns The equivalent length in feet.
 */
declare function m2ft(meters: number): number;
/**
 * Converts feet to meters.
 *
 * @param feet - The length in feet.
 * @returns The equivalent length in meters.
 */
declare function ft2m(feet: number): number;
/**
 * Converts meters to inches.
 *
 * @param meters - The length in meters.
 * @returns The equivalent length in inches.
 */
declare function m2in(meters: number): number;
/**
 * Converts inches to meters.
 *
 * @param inches - The length in inches.
 * @returns The equivalent length in meters.
 */
declare function in2m(inches: number): number;
/**
 * Converts meters to centimeters.
 *
 * @param meters - The length in meters.
 * @returns The equivalent length in centimeters.
 */
declare function m2cm(meters: number): number;
/**
 * Converts centimeters to meters.
 *
 * @param cm - The length in centimeters.
 * @returns The equivalent length in meters.
 */
declare function cm2m(cm: number): number;
/**
 * Converts minutes of angle/arc to milliradians.
 *
 * @param moa - The angle in minutes of angle/arc.
 * @returns The equivalent angle in milliradians.
 */
declare function moa2mrad(moa: number): number;
/**
 * Converts milliradians to minutes of angle/arc.
 *
 * @param mrad - The angle in milliradians.
 * @returns The equivalent angle in minutes of angle/arc (MOA).
 */
declare function mrad2moa(mrad: number): number;
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
declare function distance(size: number, mrad: number): number;
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
declare function size(distance: number, mrad: number): number;

export { cm2m, distance, ft2m, in2m, m2cm, m2ft, m2in, m2yd, moa2mrad, mrad2moa, size, yd2m };

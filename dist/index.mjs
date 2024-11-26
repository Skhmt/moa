// src/index.ts
var moaPerCircle = 21600;
var mradPerCircle = 6283.185307179586;
var bindToX = (num, x) => (num % x + x) % x;
var metersPerYard = 0.9144;
var m2yd = (meters) => meters / metersPerYard;
var yd2m = (yards) => yards * metersPerYard;
var metersPerFoot = 0.3048;
var m2ft = (meters) => meters / metersPerFoot;
var ft2m = (feet) => feet * metersPerFoot;
var metersPerInch = 0.0254;
var m2in = (meters) => meters / metersPerInch;
var in2m = (inches) => inches * metersPerInch;
var m2cm = (meters) => meters * 100;
var cm2m = (cm) => cm / 100;
function moa2mrad(moa) {
  return bindToX(moa, moaPerCircle) * mradPerCircle / moaPerCircle;
}
function mrad2moa(mrad) {
  return bindToX(mrad, mradPerCircle) * moaPerCircle / mradPerCircle;
}
function distance(size2, mrad) {
  if (size2 < 0) throw new Error("size cannot be negative");
  if (mrad < 0) throw new Error("angular measures cannot be negative");
  return 1e3 * size2 / bindToX(mrad, mradPerCircle);
}
function size(distance2, mrad) {
  if (distance2 < 0) throw new Error("distance cannot be negative");
  if (mrad < 0) throw new Error("angular measures cannot be negative");
  return distance2 * bindToX(mrad, mradPerCircle) / 1e3;
}
export {
  cm2m,
  distance,
  ft2m,
  in2m,
  m2cm,
  m2ft,
  m2in,
  m2yd,
  moa2mrad,
  mrad2moa,
  size,
  yd2m
};

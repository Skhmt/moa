// src/index.ts
var moaPerCircle = 21600;
var mradPerCircle = 6283.185307179586;
var bindToX = (num, x) => (num % x + x) % x;
var metersPerYard = 0.9144;
var metersPerFoot = 0.3048;
var metersPerInch = 0.0254;
function m2yd(meters) {
  return meters / metersPerYard;
}
function yd2m(yards) {
  return yards * metersPerYard;
}
function m2ft(meters) {
  return meters / metersPerFoot;
}
function ft2m(feet) {
  return feet * metersPerFoot;
}
function m2in(meters) {
  return meters / metersPerInch;
}
function in2m(inches) {
  return inches * metersPerInch;
}
function m2cm(meters) {
  return meters * 100;
}
function cm2m(cm) {
  return cm / 100;
}
function moa2mrad(moa) {
  return bindToX(moa, moaPerCircle) * mradPerCircle / moaPerCircle;
}
function mrad2moa(mrad) {
  return bindToX(mrad, mradPerCircle) * moaPerCircle / mradPerCircle;
}
function distance(size2, mrad) {
  if (size2 < 0) throw new Error("size cannot be negative");
  if (mrad < 0) throw new Error("angular measures cannot be negative");
  return size2 / Math.tan(bindToX(mrad, mradPerCircle) / 1e3);
}
function size(distance2, mrad) {
  if (distance2 < 0) throw new Error("distance cannot be negative");
  if (mrad < 0) throw new Error("angular measures cannot be negative");
  return distance2 * Math.tan(bindToX(mrad, mradPerCircle) / 1e3);
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

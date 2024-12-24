"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  cm2m: () => cm2m,
  distance: () => distance,
  ft2m: () => ft2m,
  in2m: () => in2m,
  m2cm: () => m2cm,
  m2ft: () => m2ft,
  m2in: () => m2in,
  m2yd: () => m2yd,
  moa2mrad: () => moa2mrad,
  mrad2moa: () => mrad2moa,
  size: () => size,
  yd2m: () => yd2m
});
module.exports = __toCommonJS(src_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});

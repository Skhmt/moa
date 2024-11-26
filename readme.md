# milliradian to minute of angle/arc conversion library

a library for conversions between milliradians and minutes of angle/arc, mostly for use with spotting scopes and long range rifle optics

the library is best used by converting all distances to meters and moa to milliradians then convert back to whatever units you want, which is why the library also includes unit conversions

## main api

__Convert MOA to milliradians__: `moa2mrad(moa: number): number`

__Convert milliradians to MOA__: `mrad2moa(mrad: number): number`

__Find the distance in any unit given size and mrad__: `distance(size: number, mrad: number): number`

__Find the size in any unit given the distance and mrad__: `size(distance: number, mrad: number): number`

## unit conversions

__Meters to yards__: `m2yd(meters: number): number`

__Yards to meters__: `yd2m(yards: number): number`

__Meters to feet__: `m2ft(meters: number): number`

__Feet to meters__: `ft2m(feet: number): number`

__Meters to inches__: `m2in(meters: number): number`

__Inches to meters__: `in2m(inches: number): number`

__Meters to centimeters__: `m2cm(meters: number): number`

__Centimeters to meters__: `cm2m(cm: number): number`
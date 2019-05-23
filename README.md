<!--
Copyright (c) 2009 Larry Moore, larmoor@gmail.com
              2014 Mike Adair, Richard Greenwood, Didier Richard, Stephen Irons, Olivier Terral and Calvin Metcalf (proj4js)
              2014 Codice Foundation
Released under the MIT License; see
http://www.opensource.org/licenses/mit-license.php
or http://en.wikipedia.org/wiki/MIT_License

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
-->

version of usngs.js with bug fixes, enhancements, and extensive unit tests.
 
```
git clone git://github.com/codice/usng.js.git
```
USNG (U.S. National Grid)
MGRS (Military Grid Reference System)

## Features
 * Convert Lat/Lon bounding box to closest USNG
 * Convert Lat/Lon to UTM/UPS
 * Convert Lat/Lon point to USNG
 * Convert UTM/UPS to Lat/Lon
 * Convert USNG to UTM
 * Convert USNG to Lat/Lon
 * Convert Lat/Lon to MGRS

## Usage
Example usage of this file with Cesium and OpenLayers can be found within https://github.com/codice/ddf

 var usng = require('usng.js');
 
 var converter = new usng.Converter();
 
 
 var usngCoord = converter.LLBboxtoUSNG(north, south, east, west);
 
 var utmCoord = converter.LLtoUTM(lat, lon, utmcoords, zone);

 var utmUpsCoord = converter.LLtoUTMUPS(lat, lon)
 
 var usngCoord = converter.LLtoUSNG(lat, lon, precision);
 
 var llCoord = converter.UTMtoLL(UTMNorthing, UTMEasting, UTMZoneNumber, accuracy);

 llCoord = converter.UTMUPStoLL("Z 2222222 2222222")
 llCoord = converter.UTMUPStoLL("10 1234567 6543210")
 llCoord = converter.UTMUPStoLL({northPole, zoneNumber, easting, northing})
 
 var utmCoord = converter.USNGtoUTM(zone,letter,sq1,sq2,east,north,ret);
 
 var llCoord = converter.USNGtoLL(usngStr_input, getCenter);
 
 var mgrsCoord = converter.LLtoMGRS(lat, lon, precision);

## CLI Test Tool Usage

*Note: This is not for production use*

Run with: `usng-cli [function] [params]`

In development you will need to run `npm link` first.

## Development

Build with: `npm run build`
Format with: `npm run format`

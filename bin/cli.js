#!/usr/bin/env node

const usngs = require('../usng')
const converter = new usngs.Converter()

isParamSafe = (p, i) => {
  if (i === 2) {
    return p.match(/^[a-zA-Z0-9_-]+$/) !== null
  } else if (i>2) {
    return p.match(/^[a-z-A-Z0-9 .\u00B0\-\+]+$/) !== null
  } else {
    return true
  }
}

if (process.argv.length<3 ||
  !process.argv.every(isParamSafe) ||
  typeof converter[process.argv[2]] !== 'function') {
  console.log("run with: usng-cli [function] [params]")
} else {
  const conversionArgs = process.argv.slice(3).map(arg => {
    const argAsNumber = Number(arg);
    if (Number.isNaN(argAsNumber)) {
      return arg;
    } else {
      return argAsNumber;
    }
  });
  console.log(JSON.stringify(converter[process.argv[2]].apply(converter, conversionArgs), null, 3))
}

#!/usr/bin/env node

// Interactive test of USNG methods
const usngs = require('../dist/usng')
const converter = new usngs.Converter()

isParamSafe = (p, i) => {
  if (i === 2) {
    return p.match(/^[a-zA-Z0-9_-]+$/) !== null
  } else if (i > 2) {
    return p.match(/^[a-z-A-Z0-9 .\u00B0\-\+{}:,"]+$/) !== null
  } else {
    return true
  }
}

if (process.argv.length < 3 ||
  !process.argv.every(isParamSafe) ||
  typeof converter[process.argv[2]] !== 'function') {
  console.log("run with: usng-cli [function] [params]")
} else {
  const conversionArgs = process.argv.slice(3).map(arg => {
    if (arg === "true" || arg === "false") {
      return arg === "true"
    }
    try {
      const argAsJSON = JSON.parse(arg)
      return argAsJSON
    } catch (e) {
    }
    const argAsNumber = Number(arg);
    return Number.isNaN(argAsNumber) ? arg : argAsNumber
  });
  const result = converter[process.argv[2]].apply(converter, conversionArgs)
  const json = JSON.stringify(result, null, 3)
  console.log(json)
}

[![Build Status](https://travis-ci.org/landau/mapkeep.svg)](https://travis-ci.org/landau/mapkeep)

mapkeep
======

Returns an array of the non-null results of fn(item, index). This means false return values will be included.


## Install

`npm i -S mapkeep`

## Usage

```js
var assert = require('assert');
var mapkeep = require('./');

function property(key) {
  return function(o) {
    return o[key];
  };
}

var arr = [
  { a: 1 },
  { a: 3 },
  { b: 4 } 
];

// will call `obj[key]` for each val where the key is `a`
var allAVals = mapkeep(arr, property('a'));
assert.deepEqual(allAVals, [1, 3]);
```

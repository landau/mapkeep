'use strict';

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

describe('mapkeep', function() {
  it('should transform and filter values', function() {
    var allAVals = mapkeep(arr, property('a'));
    assert.deepEqual(allAVals, [1, 3]);
  });
});

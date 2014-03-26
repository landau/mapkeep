'use strict';

function exists(v) {
  return v != null;
}

/**
 * Returns an array of the non-null/undefined results of fn(item, index).
 * This means false return values will be included.
 *
 * @param {Array} coll
 * @param {Function} fn
 * @param {Object} [ctx]
 *
 * @return {Array}
 */
module.exports = function mapkeep(coll, fn, ctx) {
  return coll.map(fn, ctx).filter(exists);
};


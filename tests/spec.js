var lib = require('../index');
var assert = require('assert');

describe('Library', function() {
  describe('#utility()', function() {
    it('should return 1', function() {
      assert.equal(lib.utility(), 1);
    });
  });
});

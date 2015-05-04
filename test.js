var expect = require('chai').expect
  , err = require('./')('sth')

describe('error', function() {
  it('should error value untouched and return it', function() {
    var o = { a: 1 }
    expect(err(o)).to.equal(o)
  })
})
var expect = require('chai').expect
  , owner = require('owner')
  , err = require('./')
  , to = require('to')

describe('err', function() {
  it('should error value untouched and return it', function() {
    var o = { a: 1 }
    expect(err('foo')(o)).to.equal(o)
  })

  it('should do nothing if no console', function() {
    var realConsole = owner.console

    delete owner.console
    expect(err('foo')('bar')).to.equal('bar')
    owner.console = realConsole
  })

  it('should print in color if exists', function() {
    var prefix = 'foo'
      , realRed = String.prototype.red
      , realError = owner.console.error
      , realConsole = owner.console
      , result

    delete owner.console
    owner.console = { error: function(){ result = to.arr(arguments).shift(); realError.apply(this, arguments) } }
    String.prototype.red = 'baz'

    expect(err(prefix)('bar')).to.equal('bar')
    expect(result).to.equal('baz')

    owner.console = realConsole
    String.prototype.red = realRed
  })

})
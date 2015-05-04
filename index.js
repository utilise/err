module.exports = function err(prefix){
  return function(d){
    var args = [].slice.call(arguments, 0)
    args.unshift(''.red ? prefix.red : prefix)
    return console.log.apply(console, args), d
  }
}
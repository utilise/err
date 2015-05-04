module.exports = function log(prefix){
  return function(d){
    return console.error.bind(console, ''.red ? prefix.red : prefix).apply(console, arguments), d
  }
}
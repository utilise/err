module.exports = function log(prefix){
  return function(d){
    return console.error.bind(console, String.grey ? prefix.grey : prefix).apply(console, arguments), d
  }
}
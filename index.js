module.exports = function err(prefix){
  return function(d){
    return console.error(prefix, d), d
  }
}
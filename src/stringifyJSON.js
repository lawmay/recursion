// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  if (typeof obj === 'boolean') {
    return '' + obj;
  }
  if (typeof obj === 'number') {
    return '' + obj;
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (typeof obj === 'object') {
    if (obj === null) {
      return 'null';
    } else if (Array.isArray(obj)) {
      if (obj.length === 0) {
        return '[]';
      }
      if (obj.length) {
        var results = '[';
        for (var i = 0; i < obj.length; i++) {
           results += stringifyJSON(obj[i]);
           if (i != (obj.length-1)) {
             results += ',';
           }
        }
        results += ']';
        return results;
      }
      return '' + obj;
    } else {
      var keys = Object.keys(obj);
      if (keys.length === 0) {
        return '{}';
      }
      if (keys.length) {
        var results = '{';
        for (var i = 0; i < keys.length; i++) {
          if ((obj[keys[i]] != undefined && typeof obj[keys[i]] != 'function') || obj[keys[i]] === null) {
            results += stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[keys[i]]);
            if (i != (keys.length-1)) {
              results += ',';
            }
          }
        }
        results += '}';
        return results;
      }
      return obj;
    }
  }
};

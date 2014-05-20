// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  return searchNode(document.body, className, []);
};

var searchNode = function(element, className, results) {
  if (element.classList && element.classList.contains(className)) {
      results.push(element);
  }

  for (var i = 0; i < element.childNodes.length; i++) {
    searchNode(element.childNodes[i], className, results);
  }

  return results;
}

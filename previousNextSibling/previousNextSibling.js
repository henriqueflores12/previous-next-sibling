//select the starting point and find its siblings
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

//change the value of the siblings' class attributes
prevItem.className = 'complete';
nextItem.className = 'cool';



console.log(prevItem);
console.log(nextItem);
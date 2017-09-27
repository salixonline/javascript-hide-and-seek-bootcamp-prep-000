function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list li');
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  var current = document.querySelector('#grand-node');
  var next = current.children[0];
  while (next) {
    current = next;
    next = current.children[0];
  }
  return current;
}

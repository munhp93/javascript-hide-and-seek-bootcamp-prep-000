function getFirstSelector(selector){
  return document.getElementById("app").querySelector(selector);
}

function nestedTarget(){
  return document.getElementById("nested").querySelector("div.target");
}

function increaseRankBy(n){
var lis = document.getElementById("app").querySelectorAll("ul.ranked-list");
  for(var i = 0; i<lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML +1);
  }
  return lis;
}

function deepestChild(){
  var lis = document.getElementById("grand-node").querySelectorAll('*');
  return lis[lis.length - 1];
}

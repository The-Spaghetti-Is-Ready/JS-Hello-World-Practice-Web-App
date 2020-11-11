
function textChange(){
  b.disabled = true;
  var randomstr = strings[Math.floor(Math.random() * strings.length)];
  a.innerHTML = "Goodbye, world!";
  b.innerHTML = "Changing to "+ randomstr;
  
  setTimeout(function(){
      keepChanging(randomstr)
  }, 3000);
}

function changingString(randomstr){
  a.innerHTML = randomstr;
  b.disabled = false;
}

var a = document.createElement('div');
a.innerHTML = 'goodbye world';
document.getElementById('root2').appendChild(a);
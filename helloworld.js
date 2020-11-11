var strings = ["hello", "world", "goodbye", "world", "one","two","three"];

alert("Array size: " + strings.length);

var a = document.getElementById("hello");
console.debug(a);

a.innerHTML = "Hello, " + " World!";

function changeText(){
    b.disabled = true;
    var randomstr = strings[Math.floor(Math.random() * strings.length)];
    a.innerHTML = "Goodbye, world!";
    b.innerHTML = "Changing to "+ randomstr;
    
    setTimeout(function(){
        keepChanging(randomstr)
    }, 3000);
}
function keepChanging(randomstr){
    a.innerHTML = randomstr;
    b.disabled = false;
}

var b = document.getElementById("button");
b.addEventListener("click", changeText);


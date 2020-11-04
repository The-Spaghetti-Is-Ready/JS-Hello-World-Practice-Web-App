var strings = ["hello", "world", "goodbye", "world", "one","two","three"];

alert("Array size: " + strings.length);

var a = document.getElementById("hello");
console.debug(a);

a.innerHTML = "Hello, " + " World!";

function changeText(){
    a.innerHTML = "Goodbye, world!";
    
    setTimeout(keepChanging, 3000);
}
function keepChanging(){
    a.innerHTML = strings[Math.random];
}

var b = document.getElementById("button").addEventListener("click", changeText);
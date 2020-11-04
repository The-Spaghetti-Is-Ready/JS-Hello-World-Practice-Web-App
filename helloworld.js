var strings = ["hello", "world", "goodbye", "world", "one","two","three"];
var counter = 0;

alert("Array size: " + strings.length);

var a = document.getElementById("hello");
console.debug(a);

a.innerHTML = "Hello, " + " World!";

function changeText(){
    a.innerHTML = "Goodbye, world!"; 
}
function intervalText(){
    a.innerHTML = strings[counter];
    if(counter != strings.length){
        counter++;
    }
}

setTimeout(intervalText, 3000);

var b = document.getElementById("button").addEventListener("click", changeText);
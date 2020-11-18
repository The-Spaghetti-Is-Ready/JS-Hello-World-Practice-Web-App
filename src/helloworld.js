var strings = ["hello", "world", "goodbye", "world", "one","two","three"];
var randomstr

export function main(){
    var a = document.getElementById("hello");
    console.debug(a);

    a.innerHTML = "Hello, " + " World!";

    var b = document.getElementById("button");
    b.addEventListener("click", function(){
        changeText(a, b)
    });
    
}

function changeText(a, b){
    randomstr = strings[Math.floor(Math.random() * strings.length)];
    
    b.disabled = true;
    a.innerHTML = "Goodbye, world!";
    b.innerHTML = "Changing to "+ randomstr;
    
    setTimeout(function(){
        keepChanging(a, b)
        b.innerHTML = "Change"
    }, 3000);
}

function keepChanging(a, b){
    a.innerHTML = randomstr;
    b.disabled = false;
}


var strings = ["hello", "world", "goodbye", "world", "one","two","three"];
var randomstr = strings[Math.floor(Math.random() * strings.length)];

export function main(){
    var a = document.getElementById("hello");
    console.debug(a);

    a.innerHTML = "Hello, " + " World!";

    var b = document.getElementById("button");
    b.addEventListener("click", function(){
        changeText(a, b)
    });

    changeText(a, b)
    keepChanging(randomstr, a, b)
}

function changeText(a, b){
    b.disabled = true;
    a.innerHTML = "Goodbye, world!";
    b.innerHTML = "Changing to "+ randomstr;
    
    setTimeout(function(){
        keepChanging(randomstr, a, b)
    }, 3000);
}

function keepChanging(randomstr, a, b){
    a.innerHTML = randomstr;
    b.disabled = false;
}


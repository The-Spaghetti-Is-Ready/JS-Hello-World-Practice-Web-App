var {createElement: h, useState} = React
var helloString = 'Hello World'

function TestDiv(){
    var [state, setState] = useState({
        aaa: helloString, //object creation
        bbb: {color: 'purple'}, 
    }) //creates the state
    return h('div', {}, 
        h(HelloWorld, {
            headerStr: state.aaa,
            h1Style: state.bbb,
        }),
        h(TestButton, {setState, message: 'Goodbye World'}),
        h(HelloMarsButton, {setState})
    )
}


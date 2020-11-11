var {createElement: h, useState} = React

function TestDiv(){
    var [headerStr, setHeaderStr] = useState('Hello World')
    return h('div', {}, h(HelloWorld, {headerStr}), h(TestButton, {setHeaderStr}))
}
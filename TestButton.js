var {createElement: h, useState} = React

function TestButton({setHeaderStr}){
    return h('button', {onClick(){
        setHeaderStr('Goodbye World')
        console.debug("123")
    }}, 'change')
}
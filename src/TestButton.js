import React from 'react'

var {createElement: h} = React

export function TestButton({setState, message}){
    return h('button', {onClick(){
        setState({
            aaa: message,
            bbb: {color: 'red'},
        })
        console.debug(message + " button is working")
    }}, 'change')
}

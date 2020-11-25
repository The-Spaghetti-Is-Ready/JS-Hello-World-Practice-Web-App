import {createElement as h, useState} from 'react'

export function HelloMarsButton({setState}){
    return h('button', {onClick(){
        setState({
            aaa: 'Hello Mars',
            bbb: {color: 'yellow'},
        })
        console.debug('Mars button is working')
    }}, 'Change to Mars')
}
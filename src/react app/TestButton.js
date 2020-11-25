import React from 'react'
import {Button} from 'antd'

const {createElement: h} = React

export function TestButton({setState, message, setIsTagShown}){
    return h(Button, {
      shape: 'round',
      onClick(){
        setState({
            aaa: message,
            bbb: {color: 'red'},
        })
      console.debug(message + " button is working")
      setIsTagShown(true)
    }}, 'change')
}

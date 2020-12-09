import {createElement as h} from 'react'
import {Button} from 'antd'

export function Legacy(){
  return h('div',{id: 'root2'},
    h('h1', {id: 'hello', style: {color: 'orange'}}),
    h(Button, {id: 'button', shape: 'round', onClick(){}}, 'change')
  ) 
}

import {createElement as h, useEffect} from 'react'
import {main} from './helloworld'
import {Button} from 'antd'

export function Legacy(){
  useEffect(() => {
    main()
  }, [])
  
  return h('div',{id: 'root2'},
    h('h1', {id: 'hello', style: {color: 'orange'}}),
    h(Button, {id: 'button', shape: 'round', onClick(){}}, 'change'),
  ) 
}

import ReactDOM from 'react-dom'
import React from 'react'
import {TestDiv} from './TestDiv'
import {SwitchButton} from './SwitchButton';
const h = React.createElement

export function mainThree(){
  ReactDOM.render(
    h('div', {},
      h(SwitchButton),
      h(TestDiv)
    ),
    document.getElementById('root')
  )
}  

  
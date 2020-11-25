import ReactDOM from 'react-dom'
import React from 'react'
import {TestDiv} from './react app/TestDiv'
import {SwitchButton} from './react app/SwitchButton';
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

  
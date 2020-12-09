import ReactDOM from 'react-dom'
import {TestDiv} from './react app/TestDiv'
import {SwitchButton} from './react app/SwitchButton'
import {Legacy} from './legacy/index'
import {createElement as h} from 'react'

export function mainThree(){
  ReactDOM.render(
    h('div', {},
      h(SwitchButton),
      h(TestDiv),
      h(Legacy)
    ),
    document.getElementById('root')
  )
}  

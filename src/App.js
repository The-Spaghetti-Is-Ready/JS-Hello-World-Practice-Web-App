import {TestDiv} from './react app/TestDiv'
import {SwitchButton} from './SwitchButton'
import {Legacy} from './legacy/index'
import {createElement as h} from 'react'

export function App(){
  return h('div', {},
    h(SwitchButton),
    h(TestDiv),
    h(Legacy)
  )
}

 

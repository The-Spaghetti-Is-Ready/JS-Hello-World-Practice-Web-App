import {TestDiv} from './react app/TestDiv'
import {SwitchButton} from './SwitchButton'
import {Legacy} from './legacy/index'
import {createElement as h, useState} from 'react'

export function App(){
  const defaultsubapp = 'NewApp'
  const [state, setState] = useState({subApp: defaultsubapp})

  return h('div', {},
    h(SwitchButton, {setState, defaultsubapp}),
    state.subApp == 'NewApp' && h(TestDiv),
    state.subApp == 'LegApp' && h(Legacy)
  )
}
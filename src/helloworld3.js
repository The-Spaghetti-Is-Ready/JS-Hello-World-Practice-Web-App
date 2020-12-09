import ReactDOM from 'react-dom'
import React from 'react'
import {TestDiv} from './react app/TestDiv'
import {SwitchButton} from './react app/SwitchButton'
import {Button} from 'antd'
const h = React.createElement

export function mainThree(){
  ReactDOM.render(
    h('div', {},
      h(SwitchButton),
      h(TestDiv),
      h('div',{id: 'root2'},
        h('h1', {id: 'hello', style: {color: 'orange'}}),
        h(Button, {id: 'button', shape: 'round', onclick(){}}, 'change')
      )
    ),
    document.getElementById('root')
  )
}  

/* <div id='root2'>
<h1 id="hello" style = "color: orange;"></h1>
<button id ="button">change</button>
</div> */
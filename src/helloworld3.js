import ReactDOM from 'react-dom'
import React from 'react'
import {TestDiv} from './TestDiv'
var h = React.createElement

export function mainThree(){
  ReactDOM.render(
    h(TestDiv),
    document.getElementById('root')
  );   
}  

  
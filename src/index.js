import ReactDOM from 'react-dom'
import {App} from './App'
import {createElement as h} from 'react'
import "antd/dist/antd.css"

window.addEventListener('load', function (){
  mainThree()
})

function mainThree(){
  ReactDOM.render(
    h(App),  
    document.getElementById('root')
  )
} 

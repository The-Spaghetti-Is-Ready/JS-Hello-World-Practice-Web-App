import {Button} from 'antd'
import{createElement as h} from 'react'

export function SwitchButton({setState}){
    return h('div', {id: 'appbuttons'}, 
        h(Button, {shape: 'round', onClick(){
            setState({subApp: 'NewApp'})
        }}, 'show new app'),
        h(Button, {shape: 'round', onClick(){
            setState({subApp: 'LegApp'})
        }}, 'show old app'))
}

import {main} from './legacy/helloworld'
import {Button} from 'antd'
import{createElement as h} from 'react'

export function SwitchButton({setState}){
    return h(Button, {shape: 'round', onClick(){
        // main()
        setState({subApp: 'NewApp'})
    }}, 'Show new app')
}

import {main} from '../react app/legacy/helloworld'
import {Button} from 'antd'
import{createElement as h} from 'react'

export function SwitchButton(){
    return h(Button, {shape: 'round', onClick(){
        main()
    }}, 'Run old app')
}

import { Button } from 'antd'
import { createElement as h} from 'react'

export function RentalsReport(){
  return h(Button, {shape: 'round', onClick(){
    console.debug("button pressed")
  }},'Create Report')
}

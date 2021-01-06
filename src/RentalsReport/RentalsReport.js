import React from 'react'
import { Button } from 'antd'
import { createElement as h} from 'react'
import axios from 'axios'

export function RentalsReport(){
  return h(Button, {shape: 'round', async onClick(){
    const response = await axios.get('https://api.github.com/users/The-Spaghetti-Is-Ready')
    console.log('User info: ', response.data)
    console.debug("button pressed")
  }},'Create Report')
}

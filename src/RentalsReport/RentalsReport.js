import React from 'react'
import { Button } from 'antd'
import { createElement as h } from 'react'
import axios from 'axios'
import { dariobaseKey } from '../credentials_private'

export function RentalsReport(){
  return h(Button, {shape: 'round', async onClick(){
    const response = await axios.get('https://dcgbase.appspot.com/api7/rentals/2021-01-01/2021-01-01/', {params: {
      auth: dariobaseKey
    }})
    console.log('Info: ', response.data)
    console.debug("button pressed")
  }},'Create Report')
}

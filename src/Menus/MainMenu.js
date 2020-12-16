import {Menu, menu} from 'antd'
import {createElement as h} from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import { render } from 'react-dom'

const {subMenu} = Menu

function handleClick(){
  console.log('click', e)
}

function MainMenu(){
  h(Menu, {style: {width: 256}, mode: "inline", defaultSelectedKeys: ['1'], defaultOpenKeys: ['sub1'], onClick(){
      handleClick()
    }},
    h(subMenu, {key: 'sub1', icon: MailOutlined, title: "Navigation One"}, )
  ) 
}

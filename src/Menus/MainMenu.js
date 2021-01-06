import { Menu } from 'antd'
import { createElement as h } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import { Select } from 'antd'

const {SubMenu} = Menu

function handleClick(e){
  console.log('click', e)
}

export function MainMenu(){
  return h(Menu, {style: {width: 256}, mode: "inline", defaultSelectedKeys: ['1'], defaultOpenKeys: ['sub1'], onClick(){
      handleClick()
    }},
    h(SubMenu, {key: 'sub1', icon: h(MailOutlined), title: "Navigation 1"}, 
      h(Menu.Item, {key: '1'}, 'Option 1'),
      h(Menu.Item, {key: '2'}, 'Option 2')
    ),
    h(SubMenu, {key: 'sub2', icon: h(AppstoreOutlined), title: "Navigation 2"},
      h(Menu.Item, {key: '3'}, 'Option 1'),
      h(Menu.Item, {key: '4'}, 'Option 2') 
    ),
    h(SubMenu, {key: 'sub3', icon: h(SettingOutlined), title: "Navigation 3"},
      h(Menu.Item, {key: '5'}, 'Option 1'),
      h(Menu.Item, {key: '6'}, 'Option 2')
    )
  )
}

import { Menu } from 'antd'
import { createElement as h } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import MenuItem from 'antd/lib/menu/MenuItem'

const {SubMenu} = Menu

function handleClick(e){
  console.log('click', e)
}

export function MainMenu(){
  return h(Menu, {style: {width: 256}, mode: "inline", defaultSelectedKeys: ['1'], defaultOpenKeys: ['sub1'], onClick(){
      handleClick()
    }},
    h(SubMenu, {key: 'sub1', icon: MailOutlined, title: "Navigation 1"}, 
      h(MenuItem, {key: '1'}, 'Option 1'),
      h(MenuItem, {key: '2'}, 'Option 2')
    ),
    h(SubMenu, {key: 'sub2', icon: AppstoreOutlined, title: "Navigation 2"},
      h(MenuItem, {key: '1'}, 'Option 1'),
      h(MenuItem, {key: '2'}, 'Option 2') 
    ),
    h(SubMenu, {key: 'sub3', icon: SettingOutlined, title: "Navigation 3"},
      h(MenuItem, {key: '1'}, 'Option 1'),
      h(MenuItem, {key: '2'}, 'Option 2')
    )
  )
}

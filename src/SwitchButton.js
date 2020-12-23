import {Button} from 'antd'
import{createElement as h} from 'react'
import { Select } from 'antd'

const { Option } = Select

export function SwitchButton({setState, defaultsubapp}){
  return h('div', {id: 'appbuttons'}, 
    h(Select, {defaultValue: defaultsubapp, style: {width: 120}, onChange: function (value){
      handleChange(value, setState)
    }},
      h(Option, {value: "LegApp", style: {width: 120}}, 'Legacy App'),
      h(Option, {value: "NewApp", style: {width: 120}}, 'New App')
    )
  )
}

function handleChange(value, setState) {
  console.log(`selected ${value}`);
  setState({subApp: value})
}

/*ReactDOM.render(
    <>
      <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120 }} disabled>
        <Option value="lucy">Lucy</Option>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120 }} loading>
        <Option value="lucy">Lucy</Option>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
        <Option value="lucy">Lucy</Option>
      </Select>
    </>,
    mountNode,
  )*/

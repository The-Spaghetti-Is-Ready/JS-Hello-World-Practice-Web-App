"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchButton = SwitchButton;

var _antd = require("antd");

var _react = require("react");

var Option = _antd.Select.Option;

function SwitchButton(_ref) {
  var setState = _ref.setState,
      defaultsubapp = _ref.defaultsubapp;
  return (0, _react.createElement)('div', {
    id: 'appbuttons'
  }, (0, _react.createElement)(_antd.Button, {
    shape: 'round',
    onClick: function onClick() {
      setState({
        subApp: 'NewApp'
      });
    }
  }, 'show new app'), (0, _react.createElement)(_antd.Button, {
    shape: 'round',
    onClick: function onClick() {
      setState({
        subApp: 'LegApp'
      });
    }
  }, 'show old app'), (0, _react.createElement)(_antd.Select, {
    defaultValue: defaultsubapp,
    style: {
      width: 120
    },
    onChange: function onChange(value) {
      handleChange(value, setState);
    }
  }, (0, _react.createElement)(Option, {
    value: "LegApp",
    style: {
      width: 120
    }
  }, 'Legacy App'), (0, _react.createElement)(Option, {
    value: "NewApp",
    style: {
      width: 120
    }
  }, 'New App')));
}

function handleChange(value, setState) {
  console.log("selected ".concat(value));
  setState({
    subApp: value
  });
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
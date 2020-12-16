"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = App;

var _TestDiv = require("./react app/TestDiv");

var _SwitchButton = require("./SwitchButton");

var _index = require("./legacy/index");

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function App() {
  var defaultsubapp = 'NewApp';

  var _useState = (0, _react.useState)({
    subApp: defaultsubapp
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  return (0, _react.createElement)('div', {}, (0, _react.createElement)(_SwitchButton.SwitchButton, {
    setState: setState,
    defaultsubapp: defaultsubapp
  }), state.subApp == 'NewApp' && (0, _react.createElement)(_TestDiv.TestDiv), state.subApp == 'LegApp' && (0, _react.createElement)(_index.Legacy));
}
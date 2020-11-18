import React from 'react'

var {createElement: h, useState} = React

export function HelloWorld({headerStr, h1Style}){
  return h('h1', {style: h1Style}, headerStr)
}
  
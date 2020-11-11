var h = React.createElement

function TestButton(){
    return h('button', {onclick(){}}, 'change')
}

function HelloWorld(){
  return h('h1', {}, 'hello world')
}

function TestDiv(){
  return h('div', {}, h(HelloWorld), h(TestButton))
}

ReactDOM.render(
  h(TestDiv),
  // h('div', {},
  //   h('h1', {}, 'hello world'),
  //   h(TestButton)
  // ),
  document.getElementById('root')
);   

  
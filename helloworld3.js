var h = React.createElement

function TestButton(){
    return h('button', {onclick(){}}, 'change')
}



ReactDOM.render(
  h(TestDiv),
  // h('div', {},
  //   h('h1', {}, 'hello world'),
  //   h(TestButton)
  // ),
  document.getElementById('root')
);   

  
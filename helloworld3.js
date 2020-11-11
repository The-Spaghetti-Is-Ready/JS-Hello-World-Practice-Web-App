var h = React.createElement

ReactDOM.render(
    h('div', {},
      h('h1', {}, 'hello world'),
        h('button', {
        onclick(){
          
        }
      }, 'change')
    ),
    document.getElementById('root')
  );   

  
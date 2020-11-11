var h = React.createElement

function TestButton(){
    return h('button', {onClick(){
        console.debug("123")
    }}, 'change')
}
import {createElement as h, useState, useEffect} from 'react'
import {TestButton} from '../buttons(single-dependency)/TestButton'
import {HelloMarsButton} from '../buttons(single-dependency)/hellomarsbutton'
import {HelloWorld} from '../HelloWorldComponent'
const helloString = 'Hello World'

export function TestDiv(){
    const [state, setState] = useState({
        aaa: helloString, //object creation
        bbb: {color: 'purple'}, 
    }) //creates the state
    const [isTagShown, setIsTagShown] = useState(false)

    useEffect(() => {
        setTimeout(()=>{
            setState({
                aaa: helloString,
                bbb: {color: 'navy'} 
            })
        }, 2000)
        console.debug('Effect!')
    }, [])

    return h('div', {
    }, 
        h(HelloWorld, {
            headerStr: state.aaa,
            h1Style: state.bbb,
        }),
        isTagShown && 'fancy tag',
        h(TestButton, {setState, message: 'Goodbye World', setIsTagShown}),
        h(HelloMarsButton, {setState})
    )
}


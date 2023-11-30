import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
    return(
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: { 
//         href: 'https:google.com',
//         target: '_blank'  
//     },

//     children: 'Click me to visit google'
// }

const anotherElement =(
    <a href="https://google.com">Visit Google</a>
)

const anotheruser = 'Chai'

const ReactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google',
// Hum yaha if else use in kr skte bcz ye evaluated experation hai
    anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  ReactElement
 
)

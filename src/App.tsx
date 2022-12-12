import React from 'react'

// React Element
// const title = <h1>Hello React.js</h1>

const List = () => {
    return (
        <React.Fragment>
            <ul>
                <li>list item 1</li>
                <li>list item 2</li>
                <li>list item 3</li>
            </ul>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt laborum eos optio at voluptatum. Sint quasi alias quos
                velit, suscipit necessitatibus vero. Facere, explicabo!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt laborum eos optio at voluptatum. Sint quasi alias quos
                velit, suscipit necessitatibus vero. Facere, explicabo!
            </p>
        </React.Fragment>
    )
}

// React Component
const Title = () => <h1>Hello React component</h1>

function App() {
    return (
        <div className="App">
            <Title />
            <List />
        </div>
    )
}

export default App

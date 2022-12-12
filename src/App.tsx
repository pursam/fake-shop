import React from 'react'

const List = () => {
    return (
        <>
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
        </>
    )
}

type TitleProps = {
    title: string
    text?: string
}

// React Component
const Title = (props: TitleProps) => (
    <h1>
        {props.text} {props.title}
    </h1>
)

function App() {
    return (
        <div className="App">
            <Title title="App.js" />
            <Title title="Test.js" />
            <List />
        </div>
    )
}

export default App

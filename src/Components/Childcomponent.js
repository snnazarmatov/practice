import React from "react"


export default function Child() {
    
    const [state, setState] = React.useState(0)

    // компонент родился
    React.useEffect(() => {
        console.log('COMPONENT DID MOUNT');
    }, [])

    // 
    React.useEffect(() => {
        return () => console.log('COMPONENT DID UPDATE');
    })

    React.useEffect(() => {
        return () => console.log('COMPONENT WILL UNMOUNT');
    }, [])



    const styles = {
        width: '400px',
        height: '200px',
        background: 'crimson',
        textAlign: 'center',
        padding: '20px',
        color: 'white'
    }

    return (
        <div style={styles}>
            Hello world
            <button onClick={() => setState(prev => prev + 1)}>+</button>
            <button onClick={() => setState(prev => prev - 1)}>-</button>
        </div>
    )
}
import { useState, useEffect } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0)

    // useEffect can be used as: componentDidMount, componentDidUpdate, 
    // and componentWillUnmount all in one!
    
    // like a componentDidUpdate.. but it ONLY runs when the seconds changes
    useEffect(() => {
        const incrementTime = () => { 
            setSeconds(seconds + 1) 
        }
        const interval = setInterval(incrementTime, 1000)
        // this setInterval has a "side effect" that isn't being cleaned up

        // componentWillUnmount equivalent
        return () => {
            clearInterval(interval)
        }
    }, [seconds])

    useEffect(() => {
        // componentDidUpdate equivalent
        // With no dependency array - the useEffect gets called on component mount
        // And every time the state changes (aka updates)
        console.log('The useEffect has been called!')
    })

    useEffect(() => {
        // componentDidMount equivalent
        console.log('This runs only once!')
    }, [])

    let sec = (seconds % 60).toString().padStart(2, '0')
    let min = Math.floor(seconds/60)
    return (
        <div>
            <p>{min}:{sec}</p>
            <button onClick={() => setSeconds(seconds + 1)}>Click me!</button>
        </div>
    )
}

export default Timer

// componentDidMount
// componentDidUpdate
// componentWillUnmount

// import { Component } from 'react'
// class Timer extends Component {
//     constructor() {
//         super()
//         this.state = {
//             seconds: 0,
                // interval: null
//         }
//     }
    // const updateSeconds = () => {
    //     this.setState({
    //         seconds: seconds + 1
    //     })
    // }
    // setInterval()
    // clearInterval()
//     render() {
//         return <div>This is a class based timer!</div>
//     }
// }
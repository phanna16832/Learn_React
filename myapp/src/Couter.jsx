import {useState} from "react"
const Counter = () => {
    const [count, setCount] = useState(0)

    //increment function
    const increment = () => {
        setCount(count + 1)
    }


    //decrement function
    const decrease = ()=>{
        setCount(count - 1)
    }

    //reset function
    const reset = () => {
        setCount(0)
    }

    return(
        <div className="counter">
            <p>{count}</p>
            <button onClick={decrease}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={reset}>reset</button>
        </div>
    )

}

export default Counter
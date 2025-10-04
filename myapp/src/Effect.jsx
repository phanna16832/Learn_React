import { useEffect, useState } from "react"; // 1. Imported useState

const Effect =() =>{
    const [count, setCount] = useState(0);
    useEffect(() =>{
        document.title = `you clicked ${count} times`
    })
    function addCount (){
        setCount(count + 1)
    }
    return(
        <div>
            <p>you clicked {count} times</p>
            <button onClick={addCount}>Click me</button>
        </div>
    )
}
export default Effect;
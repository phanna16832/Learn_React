import {useState} from "react"
const UseStack = () => {
    const [name, setName ] = useState()
    const updateName = () => {
        setName("john doe");
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}> Set Name</button>
        </div>
    )
}
export default UseStack
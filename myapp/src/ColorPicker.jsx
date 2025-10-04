import { useState} from "react"

const colorInput = {
    height : "50px",
    border: "none",
    cursor: "pointer",
    width: "100px",
    marginTop: "10px"

}

const ColorPicker = () =>{
    const [color, setColor] = useState("#ffff");
    const handleColorChange = (event) =>{
        setColor(event.target.value);
    }
    return(<div>
        <h1>Color Picker</h1>
        <div className="color-display" style={{backgroundColor: color}}>
            <p>Selected color : {color}</p>
        </div>
        <label htmlFor="select color"> select color :</label>
        <input type="color" value={color} onChange={handleColorChange} style={colorInput}/>
    </div> )
}


export default ColorPicker
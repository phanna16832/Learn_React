
import Home from "./testApp/home";
import {useState} from "react";
import SysCal from "./testApp/Syscal";
import Cal from "./testApp/Cal";
const textStyle = {
  color: "red",
  fontWeight: "bold",
  fontSize: "20px"
}
const App = () =>{ 
  const [text, setText] = useState("");
  const handleChange = (event) =>{
    setText(event.target.value);
  }
  return(
    <>
    <div className="home">
      <input type="text"
       placeholder="type anything ... "
      value={text}
      onChange={handleChange}/> <br /><br />
      <span style={textStyle}>{text}</span>
    </div>
    <Home/>
    <SysCal/>
    <Cal/>
    </>
  )
}

export default App;
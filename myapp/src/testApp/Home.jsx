import { useState } from "react";
const Home = () => {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("btn is clicked 0 times");

  //style
    let textStyle = {};
  if (count >= 10) {
    textStyle = { color: "red" };
  }else if (count == 0){
    textStyle = { color: "black" };
  } else {
    textStyle = { color: "green" };
  }


  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount); 
    setMsg(`btn is clicked ${newCount} times`);
    if(newCount >=10){
      setMsg(`Total click ${newCount}, stop clicking! `) ;  
    }
  } ;

  const resetCount = () =>{
    setCount(0);
    setMsg("btn is clicked 0 times");
  }
  return(
    <div>
      <button onClick={handleClick} className="btn btn-primary me-0.25">click</button>
      <button onClick={resetCount} className="btn btn-danger">reset</button>
      <p style={textStyle}>{msg}</p>
  
    </div>
  )
};

export default Home;

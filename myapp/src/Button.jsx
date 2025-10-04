/*making style in react js
inline css
modules  example: button.module.css
external
*/

//inline
const styles = {
    backgroundColor: "red",
    color: "white",
    padding: "10px, 20px",
    border: "none",
    borderRadius : "5px",
}

function Button (){
    const handleClick = (e) =>{
       e.target.textContent = "clicked"
    }

    const handle = () => {
    const span = document.createElement("span");
    span.textContent = "button clicked";
    document.body.appendChild(span); // ✅ fixed
  };
    return(<>
        <button style={styles} onClick={(e) => handleClick(e)}>click me</button>
        <button onClick={(e) => handle(e)}>show target</button>
        </>
    )
}

export default Button
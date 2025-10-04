// App.jsx
import Header from "./Header"
import Card from "./Cart"
import Footer from "./Footer"
import Button from "./Button"
import Student from "./Student"
import Userlogin from "./Userlogin"
import List from "./List"
import UseStack from "./UseStack"
import Counter from "./Couter"
import ChangeEvent from "./changeEvent"
import ColorPicker from "./ColorPicker"
import Effect from "./Effect"
function Test() {
  return (
    <>
      <Header />
      <Card />

      <Student />
      <Student name="Alice" age={20} isStudent={true} />

      <Userlogin isLogin={false } userName="Admin" />
      <List/>

      <Button />
      <hr />
      <UseStack/>
      <hr />
      <Counter/>
      <pre> on change event in react js</pre>
      <ChangeEvent/>

      <hr />
      <pre>Color Picker</pre>
      <ColorPicker/>
      <Footer />

      <hr />
      <pre>useEffect()</pre>
      <Effect/>
    </>
  )
}

export default Test

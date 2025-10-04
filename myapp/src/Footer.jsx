function Footer(){

    return(
        <footer>
            <pre> This website is using <span> react js</span> and <span>css</span> to develope.
            
            This website is created in purpose of code's practice only. 
            </pre>
            <span>&copy; {new Date().getFullYear()}</span>
        </footer>
    )
}
export default Footer
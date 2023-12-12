import Fun from './Components/footer'
function App(){
    return(
       
        <div class="login">
        <h2 id="formTitle">Register Here</h2>
        <form className="form1" id="loginForm" onsubmit="return validateForm()">
            <label>Name</label> <input type="text" name="name" id="name" required/>
            <label>Reg No</label> <input type="text" name="regno" id="regno" required/>
            <label>Email</label> <input type="email" name="mail" id="mail" required/>
            <label>Password</label> <input type="password" name="pwd" id="pwd" required/>
            <label>Confirm Password</label> <input type="password" name="pwd1" id="pwd1" required/>
            <button type="submit">Submit</button>
        </form>
        <Fun/>
        </div>
    )
}
export default App
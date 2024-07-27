import { useState } from "react";

function App() {

  const [formData,setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: false
  })

  function updateData(event){
    const {name,value,checked,type} = event.target
    setForm(prevState => {
      return{
        ...prevState,
        [name] : (type == "checkbox")? checked:value
      }
    })
  }

  const [pass,setPass] = useState("")
  const [joinNewsletter,setJoinNewsLetter] = useState(false)

  function verifyData(event){
    event.preventDefault()
    formData.password == formData.confirmPassword ? setPass("Signup successful") : setPass("Passwords do not match")
    formData.password == formData.confirmPassword && formData.newsletter ? setJoinNewsLetter(true) : setJoinNewsLetter(false) 
  }
  return (
    <div className="App">
      <form onSubmit={verifyData}>
        <input 
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={updateData}
        />
        <br />
        <input 
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={updateData}
        />
        <br />
        <input 
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={updateData}
        />
        <br />
        <input 
          type="checkbox"
          name="newsletter"
          checked={formData.newsletter}
          id="isChecked"
          onChange={updateData}
        />
        <label htmlFor="isChecked">Join Newsletter</label>
        <br />
        <button>Sign Up</button>
      </form>
      { pass }
      { joinNewsletter && <p>Thank you for joining our newsletter</p> }
    </div>
  );
}

export default App;

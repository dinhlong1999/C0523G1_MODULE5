import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [form, setForm] = useState({});
  const handleChange = event => {
      setForm({
          ...form,[event.target.name] : event.target.value
      })
    };
  const handleSubmit = () =>{
      const isValid = form.username && form.email && form.password && form.confirmPassword;
      alert(isValid ? "Sign in success!!!" : "Please fill out all the fields!!!");
    };

  return (
    <>
    <div>
        <h1>Sign up</h1>
        <form>
            <div className="custom-input">
                <label>UserName</label>
                <input type="text" name="username"
                       value={form.username || ''}
                       onChange={handleChange}/>
            </div>
            <div className="custom-input">
                <label>Email</label>
                <input type="text" name="email"
                       value={form.email || ''}
                       onChange={handleChange}/>
            </div>
            <div className="custom-input">
                <label>Password</label>
                <input type="password"
                       name="password"
                       value={form.password || ''}
                       onChange={handleChange}/>
            </div>
            <div className="custom-input">
                <label> Confirm Password</label>
                <input type="password"
                       name="confirmPassword"
                       value={form.confirmPassword || ''}
                       onChange={handleChange}/>
            </div>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
    </>
  )
}

export default App

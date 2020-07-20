import React, { useState } from 'react'
import { Link  } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerUser } from '../actions/register_action'
import '../CSS/Signup.css'

function Signup() {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPass] = useState('')
  const [ password2, setPass2] = useState('')
  
  const dispatch = useDispatch();

  const dataToPost = {
    Name: name,
    Email: email,
    Password: password
  }

  const handleSubmit = () => {
    if(password !== password2) {
      alert("Passwords don't match")
    }
    else {
      dispatch(registerUser(dataToPost))
      alert("Registration Successful. Please Login to proceed.")
    }
  }

  return (
      <div className="signup-container">
          <div className="card">
              <div className="row">
                  <h4>Sign Up</h4>
                  <div className="col s12 m6">
                      <form>
                          <div className="row">
                              <div className="input-field">
                              <i className="material-icons prefix">account_circle</i>
                              <input id="last_name" type="text" className="validate" required value={name} onChange={(e) => setName(e.target.value)} />
                              <label htmlFor="last_name">Your Name</label>
                              </div>
                          </div>
                          <div className="row">
                              <div className="input-field">
                              <i className="material-icons prefix">email</i>
                              <input id="email" type="email" className="validate" required value={email} onChange={(e) => setEmail(e.target.value) } />
                              <label htmlFor="email">Your Email</label>
                              </div>
                          </div>
                          <div className="row">
                              <div className="input-field">
                              <i className="material-icons prefix">lock</i>
                              <input id="password" type="password" className="validate" required value={password} onChange={(e) => setPass(e.target.value) } />
                              <label htmlFor="password">Password</label>
                              </div>
                          </div>
                          <div className="row">
                              <div className="input-field">
                              <i className="material-icons prefix">lock</i>
                              <input id="password" type="password" className="validate" required value={password2} onChange={(e) => setPass2(e.target.value)} />
                              <label htmlFor="password">Repeat your Password</label>
                              </div>
                          </div>

                          <label>
                              <input type="checkbox" required /> 
                              <span>I agree all statements in Terms of service</span>
                          </label>

                          <div className="row register">
                              <div className="col s6">
                                  <button className="btn waves-effect waves-light btn" onClick={() => handleSubmit() }>Register</button>
                              </div>
                          </div>
                      </form>
                  </div>

                  <div className="col s12 m6">
                      <div className="center">
                          <img src="/img/signup-image.webp" alt="SignUp" className="responsive-img" />
                      </div>

                      <div className="row center register">
                          <Link to="/signin">I am already a member</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>            
  )
}


export default Signup
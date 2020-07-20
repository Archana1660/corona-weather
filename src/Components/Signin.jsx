import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../actions/register_action'
import '../CSS/Signin.css'


function Signin() {
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    const userData = useSelector(state => state.allUserData.Data)
    const handleSubmit = () => {
        userData.map((user)=> {
            if (user.Name === name && user.Password === pass){
                return(
                    this.props.history.push('/home')
                )
            } else (
                alert("Incorrect Credentials")
            )
        })
    }

    return (
        <div className="signin-container ">
        <div className="card">
            <div className="row">
                <div className="col s12 m6">
                    <div className="row center">
                        <img src="/img/signin-image.webp" alt="SignIn" className="responsive-img" />
                    </div>
 
                    <div className="row center">
                        <Link to="/signup">Create a new account</Link>
                    </div>
                </div>

                <div className="col s12 m6">
                    <form>
                        <h4>Sign In</h4>
                        <div class="row">
                            <div class="input-field">
                                <i class="material-icons prefix">account_circle</i>
                                <input id="last_name" type="text" class="validate" value={name} onChange={(e) => setName(e.target.value) }  />
                                <label for="last_name">Your Name</label>
                            </div>
                        </div>
                    
                        <div class="row">
                            <div class="input-field">
                                <i class="material-icons prefix">lock</i>
                                <input id="password" type="password" class="validate" value={pass} onChange={(e) => setPass(e.target.value) } />
                                <label for="password">Password</label>
                            </div>
                        </div>

                        <label>
                            <input type="checkbox" />
                            <span>Remember Me</span>
                        </label>

                        <div className="row">
                            <div className="col s6 register">
                                <button class="btn waves-effect waves-light btn" onClick={() => handleSubmit() }>Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>            
    )
}

export default Signin

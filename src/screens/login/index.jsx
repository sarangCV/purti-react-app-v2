import React, {useEffect, useState} from 'react'
import { useHistory, Redirect } from 'react-router-dom';
// import { validateUser } from '../../api/auth';
import './style.css'
import loginImg from '../../assets/login-background-3.jpg';
import logo from '../../assets/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { useUserContext } from '../../context/userContext';



function Login() {

    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false)
    // const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signInUser, user, loading, error} = useUserContext();

    console.log(error);

    useEffect(() => {
        console.log('user from login screen', user);
        const isLogged = user;
        isLogged ? history.push('/customer-entry') : (<Redirect to={'/'}/>)
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)

        await signInUser(email, password).then((res) => {
            console.log('after login from login screen', res);
            if(res) {
                setIsLoading(false)
                history.push('/customer-entry')
            }
        })
    }

    return (
        <>
            {loading ? <h2>Loading</h2> : 
                <div className="login-container">
                <div className="container">
                    <div className="row login-section">
                        <div className="col-lg-5 col-md-5 col-sm-12  login-form-sec">
                            {/* <h2>Welcome to SalesBuddy</h2> */}
                            <div className="login-logo">
                                <img src={logo} alt="Purti" />
                            </div>
                            {/* <h3>Sign in.</h3> */}
                            <form className="login-form">
                                <div className="container login-input-sec">
                                    <input type="text" className="form-control login-input" autoComplete="off" placeholder="Email" onChange={(t) => setEmail(t.target.value)}/>
                                    <input type="password" className="form-control login-input" autoComplete="off" placeholder="Password" onChange={(t) => setPassword(t.target.value)}/> 
                                    <button className="btn btn-primary login-btn" type="submit" onClick={onSubmit} disabled={isLoading}>
                                        Sign In
                                        {isLoading && <FontAwesomeIcon icon={faCircleNotch} spin style={{ marginLeft: 10 }}/>}
                                        
                                    </button>                       
                                </div>                             
                                
                                <p className="login-error-text">{error}</p>
                            </form>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12 login-image-sec p-0">
                            {/* <div className="login-image-text-sec">
                                <h2>Welcome to SalesBuddy</h2>
                            </div> */}
                            <img className="login-image" src={loginImg} alt="login-back" />
                        </div>
                    </div>
                </div>
                
            </div>
            }
        </>
        
    )
}

export default Login;
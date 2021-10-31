import React from 'react';
import './Login.css'
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="text-center display-5 bg-secondary p-3">
            <h3 className="text-white">Please Login using google</h3>
            <button className="p-2 rounded display-6" onClick={handleGoogleLogin}>Google sign in</button>
        </div>
    );
};

export default Login;
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();
    const [username, setUsername] = useState('');

    // Retrieve the state passed to this location, defaulting to home ('/') if none
    const from = location.state?.from;

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ username }); // Perform login

        // Navigate to the originally requested page or default to '/'
        navigate(from?.pathname || '/', { replace: true });
    };

    return (
        <>
            {from && <p>You must log in first!</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <button type="submit">Login</button>
            </form>
        </>

    );
};

export default Login;

import useAuth from "./useAuth"
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const { logout } = useAuth()
    const navigate = useNavigate();

    return (
        <button onClick={() => {logout(); navigate("/")}}>Logout</button>
    )
}

export default Logout;
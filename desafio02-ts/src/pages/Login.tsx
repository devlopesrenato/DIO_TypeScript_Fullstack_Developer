import { Login as LoginCard } from '../components/Login';
import { login } from '../services/login';

const Login = () => {
    return (
        <LoginCard
            maxWidth={'450px'}
            onClickLogin={(email) => login(email)}
        />
    )
}

export default Login;
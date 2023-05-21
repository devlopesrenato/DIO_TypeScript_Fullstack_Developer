import { Layout } from './components/Layout';
import { Login } from './components/Login';
import { login } from './services/login';

function App() {
  return (
    <Layout >
      <Login
        maxWidth={'450px'}
        onClickLogin={(email) => login(email)}
      />
    </Layout>
  );
}

export default App;

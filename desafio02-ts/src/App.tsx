import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Conta from './pages/Conta';
import Login from './pages/Login';


function App() {
  return (
    <BrowserRouter>
      <Layout >
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/conta' element={<Conta />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

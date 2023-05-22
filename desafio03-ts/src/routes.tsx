import { Route, Routes } from "react-router-dom"
import Conta from "./pages/Conta"
import ContaInfo from "./pages/ContaInfo"
import Login from "./pages/Login"
import Usuario from "./pages/Usuario"

const MainRoutes = () => {    

    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/conta/:id' element={<Conta />} />
            <Route path='/infoconta' element={<ContaInfo />} />
            <Route path='/usuario/:id' element={<Usuario />} />
        </Routes>
    )
}

export default MainRoutes

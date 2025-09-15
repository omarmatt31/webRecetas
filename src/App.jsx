import { BrowserRouter, Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import Error404 from "./components/pages/Error404";
import Footer from "./components/shared/Footer";
import Menu from "./components/shared/Menu";
import Inicio from "./components/pages/Index"
import DetalleReceta from "./components/pages/DetalleReceta";
import Administrador from "./components/pages/Administrador";
import Usuarios from "./components/pages/Usuarios";
import Login from "./components/pages/Login";
import { useEffect, useState } from "react";
import ProtectorAdmin from "./components/routes/ProtectorAdmin";
import FormularioReceta from "./components/pages/recetas/FormularioReceta";
import {v4 as uuidv4} from 'uuid';
import FormularioUsuario from "./components/pages/usuarios/FormularioUsuario";

function App() {
  const usuarioLogueado = JSON.parse(sessionStorage.getItem('userKey'))||{};
  const recetasLocalStorage = JSON.parse(localStorage.getItem('catalogoRecetas')) || []
  const [usuarioAdmin, setUsuarioAdmin] = useState(usuarioLogueado)
  const [recetas, setRecetas] = useState(recetasLocalStorage)

  useEffect(()=>{
    localStorage.setItem('catalogoRecetas', JSON.stringify(recetas))
  }, [recetas])
  
   useEffect(()=>{
    sessionStorage.setItem('userKey', JSON.stringify(usuarioAdmin))
  }, [usuarioAdmin])

  return (
    <>
      <BrowserRouter>
        <Menu usuarioAdmin={usuarioAdmin} setUsuarioAdmin={setUsuarioAdmin}></Menu>
        <main>
          <Routes>
            <Route path="/" element={<Inicio recetas={recetas}></Inicio>}></Route>
            <Route path="/detalle/:id" element={<DetalleReceta></DetalleReceta>}></Route>
            <Route path="/login" element={<Login setUsuarioAdmin={setUsuarioAdmin}></Login>}></Route>
            <Route path="/administrador" element={<ProtectorAdmin isAdmin={usuarioAdmin}></ProtectorAdmin>}>
              <Route index element={<Administrador setRecetas={setRecetas}></Administrador>}></Route>
              <Route path="crear" element={<FormularioReceta titulo={'Receta Nueva'}></FormularioReceta>}></Route>
              <Route path="editar/:id" element={<FormularioReceta titulo={'Modificar Receta'} ></FormularioReceta>}></Route>
            </Route>
            <Route path="/usuarios" element={<ProtectorAdmin isAdmin={usuarioAdmin}></ProtectorAdmin>}>
              <Route index element={<Usuarios setRecetas={setRecetas}></Usuarios>}></Route>
              <Route path="crear" element={<FormularioUsuario titulo={'Usuario Nuevo'}></FormularioUsuario>}></Route>
              <Route path="editar/:id" element={<FormularioUsuario titulo={'Modificar Usuario'}></FormularioUsuario>}></Route>
            </Route>
            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App

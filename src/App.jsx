import { BrowserRouter, Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import Error404 from "./components/pages/Error404";
import Footer from "./components/shared/Footer";
import Menu from "./components/shared/Menu";
import Inicio from "./components/pages/Index"
import DetalleReceta from "./components/pages/DetalleReceta";
import Administrador from "./components/pages/Administrador";
import Login from "./components/pages/Login";
import { useEffect, useState } from "react";
import ProtectorAdmin from "./components/routes/ProtectorAdmin";
import FormularioReceta from "./components/pages/recetas/FormularioReceta";
import {v4 as uuidv4} from 'uuid';

function App() {
  const usuarioLogueado = sessionStorage.getItem('userKey')||false;
  const recetasLocalStorage = JSON.parse(localStorage.getItem('catalogoRecetas')) || []
  const [usuarioAdmin, setUsuarioAdmin] = useState(usuarioLogueado)
  const [recetas, setRecetas] = useState(recetasLocalStorage)

  useEffect(()=>{
    localStorage.setItem('catalogoRecetas', JSON.stringify(recetas))
  }, [recetas])

  const crearReceta=(recetaNueva)=>{
    recetaNueva.id = uuidv4();
    console.log(recetaNueva)
    setRecetas([...recetas, recetaNueva])
    return true
  }

  const borrarReceta=(idReceta)=>{
    const recetasFiltradas = recetas.filter((itemReceta)=> itemReceta.id !== idReceta)
    setRecetas(recetasFiltradas)
    return true
  }

  const buscarReceta=(idReceta)=>{
    const recetaBuscada = recetas.find((itemReceta)=> itemReceta.id === idReceta)
    return recetaBuscada
  }

  const editarReceta=(idReceta, recetaActualizada)=>{
    const recetasEditadas = recetas.map((itemReceta)=>{
      if(itemReceta.id === idReceta){
        return {
          ...itemReceta, 
          ...recetaActualizada
        }
      }
      else{
        return itemReceta
      }
    })
    setRecetas(recetasEditadas)
    return true
  }
  return (
    <>
      <BrowserRouter>
        <Menu usuarioAdmin={usuarioAdmin} setUsuarioAdmin={setUsuarioAdmin}></Menu>
        <main>
          <Routes>
            <Route path="/" element={<Inicio recetas={recetas}></Inicio>}></Route>
            <Route path="/detalle/:id" element={<DetalleReceta buscarReceta={buscarReceta}></DetalleReceta>}></Route>
            <Route path="/login" element={<Login setUsuarioAdmin={setUsuarioAdmin}></Login>}></Route>
            <Route path="/administrador" element={<ProtectorAdmin isAdmin={usuarioAdmin}></ProtectorAdmin>}>
              <Route index element={<Administrador setRecetas={setRecetas} recetas={recetas} borrarReceta={borrarReceta}></Administrador>}></Route>
              <Route path="crear" element={<FormularioReceta titulo={'Receta Nueva'} crearReceta={crearReceta}></FormularioReceta>}></Route>
              <Route path="editar/:id" element={<FormularioReceta titulo={'Modificar Receta'} buscarReceta={buscarReceta} editarReceta={editarReceta}></FormularioReceta>}></Route>
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

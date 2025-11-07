//Dependencias
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
//Estilos
import './css/general.css'

import Header from './componentes/header'
import Pie from './componentes/pie'
import Objetos from './componentes/objetos'
import Pruebas from './componentes/pruebas'
import ClaseForm from './componentes/claseform'
import Hooks from './componentes/hooks'
const router = createBrowserRouter ([
  {
    path: "/",
    Component: Objetos 
  },
  {
    path: "/clase-formulario",
    Component: ClaseForm
  },
  {
    path: "/pruebas",
    Component: Pruebas
  },
  {
    path: "/hooks",
    Component: Hooks
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Pie />
  </StrictMode>,
)

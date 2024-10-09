import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

import Login from './routes/login/login.jsx';
import LoginRuraq from './routes/login/loginRuraq.jsx';
import Registro from './routes/registro/registro.jsx';
import RegistroCelular from './routes/registro/registroCelular.jsx';
import RegistroRuraq from './routes/registro/registroRuraq.jsx';
import TerminosCondicionesRuraq from './routes/registro/terminosCondicionesRuraq.jsx';
import TerminosCondicionesCelular from './routes/registro/terminosCondicionesCelular.jsx';
import Start from './routes/registro/start.jsx';


const checkAuth = async () => {
  try {
    const response = await fetch('/inicioSesion/check', {
      method: 'GET',
      credentials: 'include', // Para incluir las cookies de sesión
    });

    // Verificamos si hay algún error en la respuesta
    if (!response.ok) {
      const data = await response.json();
      // Si el servidor responde que no está autenticado, redirigir al registro
      if (data.authenticated === false) {
        window.location.href = '/registro'; // Redirigir si no está autenticado
        return null; // Parar ejecución si redirige
      }

      throw new Error(data.message || 'Error al verificar la autenticación');
    }

    const data = await response.json();

    // Verificar si la respuesta indica que el usuario no está autenticado
    if (!data.authenticated) {
      window.location.href = '/registro'; // Redirigir al registro si no está autenticado
      return null; // Detenemos el flujo si redirige
    }

    // Retornamos el token o los datos de usuario
    return {
      token: data.token || null,
      user: data.user || null,
    };

  } catch (error) {
    console.error('Error al verificar la autenticación:', error.message);
    // En caso de error (por ejemplo, si no hay cookie), redirigir al registro
    window.location.href = '/registro'; // Redirigir en caso de error
    throw error; // Si es necesario manejar el error en otro lugar
  }
};



// Definir rutas
const router = createBrowserRouter([
  // Paguina de carga inicial
  {
    path: '/',
    element: <Start />,
  },

  // ruta de registro
  {
    path: '/registro',
    element: <Registro />,
  },
  {
    path: '/registroCelular',
    element: <RegistroCelular />,
  },
  {
    path: '/registroRuraq',
    element: <RegistroRuraq />,
  },

  // pregunta para saber por donde hace el login
  {
    path: '/login',
    element: <Login />,
  },

  // Termionaos y condiciones
  {
    path: '/terminosCondicionesRuraq',
    element: <TerminosCondicionesRuraq />,
  },
  {
    path: '/terminosCondicionesCelular',
    element: <TerminosCondicionesCelular />,
  },

  // inicio de seccion de ruraq
  {
    path: '/loginRuraq',
    element: <LoginRuraq />,
  },

  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
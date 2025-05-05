import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Contact from './components/contect/Contact.jsx'

const router=createBrowserRouter([{
  path:'/',
  element:<App/>,

    


}
,{
  path:'/Contact',
  element:<Contact/>
}])
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

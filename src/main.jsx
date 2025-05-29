import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/style.css'
import './assets/fontawesome/all.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter, Route } from 'react-router'
import { createRoutesFromElements } from 'react-router'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import BookACall from './components/BookACall/BookACall.jsx'
import MarketingVipResourcesHub from './components/MarketingVipResourcesHub/MarketingVipResourcesHub.jsx'
import AITools from './components/AITools/AITools.jsx' 



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<MarketingVipResourcesHub />}/>
      <Route path='book-a-call' element={<BookACall />}/>      
      <Route path='ai-tools' element={<AITools/>} /> 
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>    
    <RouterProvider router={router}/>
  </StrictMode>,
)

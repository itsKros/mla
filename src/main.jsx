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
import AIBook from './components/AIBook/AIBook.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<MarketingVipResourcesHub />}/>
      <Route path='book-a-call' element={<BookACall />}/>      
      <Route path="ai-book" element={<AIBook />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>    
    <RouterProvider router={router}/>
  </StrictMode>,
)

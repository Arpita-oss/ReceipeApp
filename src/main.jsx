import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import RecipeContext from './contexts/RecipeContext.jsx'
import { ToastContainer } from 'react-toastify'


ReactDOM.createRoot(document.getElementById('root')).render(
  <RecipeContext>
<BrowserRouter>
    <App />
    <ToastContainer />
    </BrowserRouter>
   
  </RecipeContext>
  
)

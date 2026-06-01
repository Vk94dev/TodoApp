import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RefContext from './context/refContext.jsx'
import {BrowserRouter} from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <RefContext>
     <App />
  </RefContext>
  </BrowserRouter>
   
  
)


import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client"
import { CurrentUserProvider } from './contexts/current-user.jsx'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(  
  <CurrentUserProvider>    
    <App /> 
  </CurrentUserProvider>
)

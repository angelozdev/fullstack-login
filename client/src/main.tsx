import App from './App'
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const $root = document.getElementById('root')!
const root = createRoot($root)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

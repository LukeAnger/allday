import React from 'react'
import { createroot } from 'react-dom/client'
import App from './App.jsx'

const root = createroot(document.getElementById("root"))

root.render(<App />)
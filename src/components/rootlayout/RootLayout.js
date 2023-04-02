import React from 'react'
import './RootLayout.css'
import { Outlet } from 'react-router-dom'
function RootLayout() {
  return (
    <div>
        <Outlet></Outlet>
    </div>
  )
}

export default RootLayout
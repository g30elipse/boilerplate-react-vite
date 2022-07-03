import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AppHeader from './components/AppHeader'
import Loader from './core/components/Loader'
import Toast from './core/components/Toast'
import Home from './screens/Home'

function App() {

  return (
    <>
    <Loader/>
    <Toast/>
    <AppHeader/>
    <Routes>
        {/* <Route path="food-drinks/:id" element={<UserDetail/>} /> */}
        {/* <Route path="food-drinks" element={<EntityListingPage/>} /> */}
        <Route path="/"  element={<Home/>} />
    </Routes>
    </>
  )
}

export default App

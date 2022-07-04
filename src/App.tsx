import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'

function App() {

  return (
    <>
    <Routes>
        {/* <Route path="food-drinks/:id" element={<UserDetail/>} /> */}
        {/* <Route path="food-drinks" element={<EntityListingPage/>} /> */}
        <Route path="/"  element={<Home/>} />
    </Routes>
    </>
  )
}

export default App

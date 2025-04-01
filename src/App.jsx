import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//layout
import DefaultLayout from './layout/DefaultLayout'
//pagine
import ChiSiamo from './pages/ChiSiamo'
import Post from './pages/Post'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Navbar />
          <Route element={<DefaultLayout />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

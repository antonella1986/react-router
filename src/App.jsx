import { BrowserRouter, Routes, Route } from 'react-router-dom'
//layout
import DefaultLayout from './layout/DefaultLayout'
//pagine
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import Post from './pages/Post'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Navbar />
          <Route path="/" element={<Home />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/post" element={<Post />} />
          <Route element={<DefaultLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
//layout
import DefaultLayout from './layout/DefaultLayout'
//pagine
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import Post from './pages/Post'
import Product from './pages/Product'
import Products from './pages/Products'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/post" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

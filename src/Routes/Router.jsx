import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NoteFound from '../Components/NoteFound/NoteFound'
import About from '../pages/About'
import ProductDetails from '../pages/ProductDetails'
import Contact from '../pages/Contact'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/productdetal' element={<ProductDetails />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NoteFound />} />
        </Routes>
    )
}

export default Router
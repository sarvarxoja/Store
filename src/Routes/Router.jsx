import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NoteFound from '../Components/NoteFound/NoteFound'
import About from '../pages/About'
import ProductDetails from '../pages/ProductDetails'
import Contact from '../pages/Contact'
import CatalogItem from '../Components/UI/CatalogItem/CatalogItem'
import Catalogs from '../pages/Catalogs'
import CatalogPhone from '../Components/UI/CatalogPhone/CatalogPhone'

const Router = () => {
    return (
        <div className='routes'>
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/catalog/phones' element={<CatalogPhone />} />
                <Route path='/about' element={<About />} />
                <Route path='/productdetal' element={<ProductDetails />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/catalog/:name' element={<CatalogItem />} />
                <Route path='/catalogs' element={<Catalogs />} />
                <Route path='*' element={<NoteFound />} />
                <Route path='/catalogs/elem' element={<CatalogPhone />} />
                <Route path='/catalog/item' element={<CatalogItem />} />
            </Routes>
        </div>
    )
}

export default Router
import './App.css';
import Navbar from './components/navbar/Navbar';
import Navbar2 from './components/navbar/navbar2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/product';
import Cart from './pages/cart';
import LoginSignup from './pages/loginsignup';
import Footer from './components/footer/footer';
import p_1 from './components/Assets/banner_1.jpg';
import p_15 from './components/Assets/banner_4.jpg';
import p_31 from './components/Assets/banner_3.jpg';
import p_32 from './components/Assets/others.jpeg';
import p_33 from './components/Assets/stationary.jpeg';
import HB from './components/Assets/hb.jpeg';
import SB from './components/Assets/sbt.avif';
import Payment from './pages/payment';
import CheckoutPage from './pages/checkout'; 
import Profile from './pages/profile';
import ShopKeeper from './pages/shopkeeper';
import AddProduct from './pages/addproduct';
import Pending from './myshopkeeper/pending/pending';
import Complete from './myshopkeeper/complete/complete';
import Farmers from './myshopkeeper/rfarmers/Rfarmers';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Navbar2 />

                <Routes>
                    <Route path='/' element={<Shop />} />
                    <Route path='/Fertilizers' element={<ShopCategory banner={p_1} category="tomato" />} />
                    <Route path='/Pesticides' element={<ShopCategory banner={p_15} category="onion" />} />
                    <Route path='/Organic' element={<ShopCategory banner={p_31} category="graphes" />} />
                    <Route path='/Herbicides' element={<ShopCategory banner={HB} category="Herbicides" />} />
                    <Route path='/seed' element={<ShopCategory banner={SB} category="seed" />}/>
                    <Route path='/others' element={<ShopCategory banner={p_32} category="others" />}/>
                    <Route path='/stationary' element={<ShopCategory banner={p_33} category="stationary" />}/>
                    <Route path='/product' element={<Product />}>
                        <Route path=':productId' element={<Product />} />
                    </Route>
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/loginsignup' element={<LoginSignup />} />
                    <Route path='/checkout' element={<CheckoutPage />} />
                    <Route path='/payment' element={<Payment/>} />
                    <Route path='/profile' element={<Profile/>} />
                    <Route path='/shopkeeper' element={<ShopKeeper/>} />
                    <Route path='/addproduct' element={<AddProduct/>} />
                    <Route path='/pending' element={<Pending/>} />
                    <Route path='/complete' element={<Complete/>} />
                    <Route path='/rfarmers' element={<Farmers/>} />
                </Routes>
                <br/>
                <br/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;

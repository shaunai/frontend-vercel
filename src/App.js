
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import robusta_banner from './Components/Assets/banner_robusta.png'
import luwak_banner from './Components/Assets/banner_luwak.png'
import tea_banner from './Components/Assets/banner_tea.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/robusta' element={<ShopCategory banner={robusta_banner} category="robusta"/>}/>
        <Route path='/luwak' element={<ShopCategory banner={luwak_banner} category="luwak"/>}/>
        <Route path='/tea' element={<ShopCategory banner={tea_banner} category="tea"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

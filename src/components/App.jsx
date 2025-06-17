import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from "./Header/Header";
import { Inicio } from '../pages/Inicio';
import { Produtos } from '../pages/Produtos';
import { Pedidos } from '../pages/Pedidos';
import { Ofertas } from '../pages/Ofertas';
import { NaoEncontrado } from '../pages/NaoEncontrado';
import { Footer } from './Footer/Footer';
import { Product } from './ProductGrid/Product';
import { ProductBuy } from './ProductBuy/ProductBuy';
import { EfetuarPagamento } from '../pages/EfetuarPagamento';
import { FinishBuy } from './FinishBuy/FinishBuy';



export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='produtos' element={<Produtos />} />
        <Route path='efetuarPagamento' element={<EfetuarPagamento />} />
        <Route path='formulario' element={<FinishBuy />} />
        <Route path='pedidos' element={<Pedidos />} />
        <Route path='ofertas' element={<Ofertas />} />
        <Route path='*' element={<NaoEncontrado/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

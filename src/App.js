import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import ProductDetail from './Components/Pages/ProductDetail';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/productdetail/:productname/:id"
          element={<ProductDetail />}
        ></Route>
        <Route
          path="/productdetail/:productname"
          element={<ProductDetail />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

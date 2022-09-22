import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home";
import Contacto from "./views/Contacto";
// import NotFound from "./views/NotFound";






function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacto" element={<Contacto />} />
        {/* <Route path="*" element={<Home />} /> */}

        </Routes>

        <Footer footer="Este proyecto fue hecho por Richard Castro"/> {/*Mostrando el componente Footer*/}
      </BrowserRouter>
    </div>
  );
}


export default App;

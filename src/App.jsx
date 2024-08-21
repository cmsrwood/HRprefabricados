import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navegacion from "./Pages/plantilla/Navegacion";
import Index from "./Pages/Index";
import Nosotros from "./Pages/Nosotros";
import Contacto from "./Pages/Contacto";
import Productos from "./Pages/Productos";
import Footer from "./Pages/plantilla/Footer";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route exact path='/' element={<Index />}> </Route>
          <Route exact path='/nosotros' element={<Nosotros />}> </Route>
          <Route exact path='/contacto' element={<Contacto />}> </Route>
          <Route exact path='/productos' element={<Productos />}> </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

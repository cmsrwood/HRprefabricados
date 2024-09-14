import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navegacion from "./Pages/plantilla/Navegacion";
import Index from "./Pages/Index";
import Nosotros from "./Pages/Nosotros";
import Contacto from "./Pages/Contacto";
import Footer from "./Pages/plantilla/Footer";
import Proyectos from "./Pages/proyectos";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route exact path='/' element={<Index />}> </Route>
          <Route exact path='/nosotros' element={<Nosotros />}> </Route>
          <Route exact path='/contacto' element={<Contacto />}> </Route>
          <Route exact path='/proyectos' element={<Proyectos />}> </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

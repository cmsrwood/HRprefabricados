import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Pages/Index";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<IndexDefault />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

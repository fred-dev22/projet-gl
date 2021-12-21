import { Home } from './Pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Inscription} from "../src/Pages/Inscription"
import {Conection} from "../src/Pages/Conection"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="Inscription" exact element={<Inscription />} />
        <Route path="Conection" exact element={<Conection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

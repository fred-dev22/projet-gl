import React from 'react';
import { Home } from './Pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Inscription} from "../src/Pages/Inscription"
import {Conection} from "../src/Pages/Conection"
import NotFound from './Pages/NotFound';
import A_propos from './Pages/A_propos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="Inscription" element={<Inscription />} />
        <Route path="Conection" element={<Conection />} />
        <Route  path="*" element={<NotFound/>} />
        <Route path="A_propos" element={<A_propos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

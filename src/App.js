import React from 'react';
import { Home } from './Pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Inscription} from "../src/Pages/Inscription"
import {Conection} from "../src/Pages/Conection"
import {Voyages} from "../src/Pages/Voyages"
import NotFound from './Pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="Inscription" element={<Inscription />} />
        <Route path="Conection" element={<Conection />} />
        <Route path="Voyages" element={<Voyages />} />
        <Route  path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

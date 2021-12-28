import React from 'react';
import { Home } from './Pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Inscription} from "../src/Pages/Inscription"
import {Connexion} from "./Pages/Connexion"
import NotFound from './Pages/NotFound';
import Agences from './Pages/Agences';
import Voyages from './Pages/Voyages';
import Apropos from './Pages/Apropos';
import Mon_compte from './Pages/Mon_compte';
import { Reservation } from './Pages/Reservation';

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="inscription" element={<Inscription />} />
        <Route path="connexion" element={<Connexion />} />
        <Route path="voyages" element={<Voyages/>}/>
        <Route path="agences" element={<Agences/>}/>
        <Route path="a-propos" element={<Apropos/>}/>
        <Route path="compte" element={<Mon_compte/>}/>
        <Route path="reservation/:id" element={<Reservation />}/>
        <Route  path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from '../nav';
import MusicCatalog from '../../feature/music-catalog';
import About from '../../feature/about';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<MusicCatalog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

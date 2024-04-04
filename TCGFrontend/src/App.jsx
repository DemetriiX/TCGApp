import { Route, Routes } from "react-router-dom"
import Pocetna from "./pages/Pocetna"
import { RoutesNames } from "./constants"
import NavBar from "./components/NavBar"

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Korisnici from "./pages/korisnici/Korisnici"
import KorisniciDodaj from "./pages/korisnici/KorisniciDodaj"
import KorisniciPromijeni from "./pages/korisnici/KorisniciPromijeni"

import Rijetkosti from "./pages/rijetkosti/Rijetkosti"
import RijetkostiDodaj from "./pages/rijetkosti/RijetkostiDodaj"
import RijetkostiPromjeni from "./pages/rijetkosti/RijetkostiPromijeni"

import Igre from "./pages/igre/Igre"
import IgreDodaj from "./pages/igre/IgreDodaj"
import IgrePromijeni from "./pages/igre/IgrePromijeni"

import Slicice from "./pages/sličice/Sličice"
import SliciceDodaj from "./pages/sličice/SličiceDodaj"
import SlicicePromijeni from "./pages/sličice/SličicePromijeni"



function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <>
          <Route path={RoutesNames.HOME} element={<Pocetna />} />
          <Route path={RoutesNames.KORISNICI_PREGLED} element={<Korisnici />} />
          <Route path={RoutesNames.KORISNICI_NOVI} element={<KorisniciDodaj />} />
          <Route path={RoutesNames.KORISNICI_PROMIJENI} element={<KorisniciPromijeni />} />


          <Route path={RoutesNames.RIJETKOSTI_PREGLED} element={<Rijetkosti />} />
          <Route path={RoutesNames.RIJETKOSTI_NOVI} element={<RijetkostiDodaj />} />
          <Route path={RoutesNames.RIJETKOSTI_PROMIJENI} element={<RijetkostiPromjeni />} />

          <Route path={RoutesNames.IGRE_PREGLED} element={<Igre />} />
          <Route path={RoutesNames.IGRE_NOVI} element={<IgreDodaj />} />
          <Route path={RoutesNames.IGRE_PROMIJENI} element={<IgrePromijeni />} />

          <Route path={RoutesNames.SLICICE_PREGLED} element={<Slicice />} />
          <Route path={RoutesNames.SLICICE_NOVI} element={<SliciceDodaj />} />
          <Route path={RoutesNames.SLICICE_PROMIJENI} element={<SlicicePromijeni />} />
        </>
      </Routes>
    </>
  )
}

export default App
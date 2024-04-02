import { Route, Routes } from "react-router-dom"
import Pocetna from "./pages/Pocetna"
import { RoutesNames } from "./constants"
import NavBar from "./components/NavBar"
import Korisnici from "./pages/korisnici/Korisnici"

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import KorisniciDodaj from "./pages/korisnici/KorisniciDodaj"
import KorisniciPromijeni from "./pages/korisnici/KorisniciPromijeni"

import Rijetkosti from "./pages/rijetkosti/Rijetkosti"
import RijetkostiDodaj from "./pages/rijetkosti/RijetkostiDodaj"
import RijetkostiPromjeni from "./pages/rijetkosti/RijetkostiPromijeni"

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
        </>
      </Routes>
    </>
  )
}

export default App
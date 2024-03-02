import { Route, Routes } from "react-router-dom"
import Pocetna from "./pages/Pocetna"
import { RoutesNames } from "./constants"
import NavBar from "./components/NavBar"
import Korisnici from "./pages/korisnici/Korisnici"

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import KorisniciDodaj from "./pages/korisnici/KorisniciDodaj"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <>
          <Route path={RoutesNames.HOME} element={<Pocetna />} />
          <Route path={RoutesNames.KORISNICI_PREGLED} element={<Korisnici />} />
          <Route path={RoutesNames.KORISNICI_NOVI} element={<KorisniciDodaj />} />
        </>
      </Routes>
    </>
  )
}

export default App
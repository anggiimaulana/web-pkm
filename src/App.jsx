import { Routes, Route } from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"

import HomePage from "./pages/HomePage"
import KelasPage from "./pages/KelasPage"
import TestimoniPage from "./pages/TestimoniPage"
import SyaratPage from "./pages/SyaratPage"
import Pppp from "./pages/matematika/Matematika"
import About from "./pages/About"
import P4 from "./pages/matematika/P4"

function App() {
  return <div>


    <NavbarComponent/>

    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/kelas" Component={KelasPage} />
      <Route path="/testimonial" Component={TestimoniPage} />
      <Route path="/tentang-kami" Component={About} />
      <Route path="/syarat" Component={SyaratPage} />
      <Route path="/ruang-belajar/mtk" Component={Pppp} />
      <Route path="/ruang-belajar/mtk/4P" Component={P4} />
      <Route path="/ruang-belajar/mtk/p4/saa"/>
    </Routes>

    <FooterComponent/>
  </div>
}

export default App


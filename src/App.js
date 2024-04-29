import Footer from "./components/Footer"
import Navs from "./components/Navs"
import About from "./pages/About"
import Home from "./pages/Home"
import People from "./pages/People"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import PersonDetail from "./pages/PersonDetail"
import Login from "./pages/Login"
import PrivateRouter from "./pages/PrivateRouter" 
import { LoginContext } from "./context/LoginContext" // context'i ekledik
import { useState } from "react"

function App() {
  const [signed, setSigned] = useState(false) // burada local bir state tanımladık. aşağıda LoginContext ile signed bilgisini globala alana göndereceğiz. 

  return (
    //? 2. Uygulamanın Context provider'ı ile sarmalnaması 
    <LoginContext.Provider value={{ signed, setSigned }}> {/* context'in provider'ını ekledik.  */}
      <BrowserRouter>
        <Navs />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />

          <Route path="people" element={<PrivateRouter />}>
            <Route path="" element={<People />} />
            <Route path=":id" element={<PersonDetail />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LoginContext.Provider>
  )
}

export default App

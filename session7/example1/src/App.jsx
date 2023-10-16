import { useState } from "react"
import reactLogo from "./assets/react.svg"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <Main isLoggedIn={isLoggedIn} />
      <Footer isLoggedIn={isLoggedIn} />
    </div>
  )
}

export default App

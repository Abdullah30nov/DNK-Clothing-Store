import { Route, Routes } from "react-router-dom"
import Home from "./Component/Home/page"
import SingleProducts from "./SingleUseComponent/SingleProduct/SingleProduct"
import Contact from "./SingleUseComponent/Contact/Contact"
import About from "./SingleUseComponent/About/About"
function App() {
  return (
    <>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Products/:id" element={<SingleProducts/>}/>
     </Routes>
    </>
  )
}

export default App

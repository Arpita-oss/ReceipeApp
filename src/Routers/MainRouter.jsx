
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home"
import Recipe from "../components/Recipe"
import Details from "../components/Details"
import Create from "../components/Create"
import About from "../components/About"
import Contact from "../components/Contact"
import Layout from "../components/Layout";
import Update from "../components/Update";


const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/create-recipe" element={<Create/>} />
        <Route path="/recipes/1" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/update-recipe/1" element={<Update />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default MainRouter;

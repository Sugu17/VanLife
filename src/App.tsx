import { Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/about/AboutPage";
import HomePage from "./Pages/home/HomePage";
import VansPage from "./Pages/vans/VansPage";
import VanDetailPage from "./Pages/details/VanDetailPage";
import Layout from "./Components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/vans" element={<VansPage />}></Route>
        <Route path="/vans/:id" element={<VanDetailPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

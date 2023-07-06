import { Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import VansPage from "./Pages/VansPage";
import VanDetailPage from "./Pages/VanDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/vans" element={<VansPage />}></Route>
      <Route path="/vans/:id" element={<VanDetailPage />}></Route>
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import AboutPage from "./Pages/about/AboutPage";
import VanDetailPage from "./Pages/details/VanDetailPage";
import HomePage from "./Pages/home/HomePage";
import VansPage from "./Pages/vans/VansPage";
import HostDashboard from "./Pages/host/home/HostDashboard";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/vans" element={<VansPage />}></Route>
        <Route path="/vans/:id" element={<VanDetailPage />}></Route>
        <Route path="/host" element={<HostDashboard />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

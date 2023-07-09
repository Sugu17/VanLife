import { Route, Routes } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import AboutPage from "./Pages/about/AboutPage";
import VanDetailPage from "./Pages/details/VanDetailPage";
import HomePage from "./Pages/home/HomePage";
import VansPage from "./Pages/vans/VansPage";
import HostDashboard from "./Pages/host/home/HostDashboard";
import HostLayout from "./Components/host/HostLayout";
import HostVansPage from "./Pages/host/vans/HostVansPage";
import HostVanDetailPage from "./Pages/host/vans/HostVanDetailPage";
import HostVanInfo from "./Pages/host/vans/HostVanInfo";
import Price from "./Components/Price";
import HostVanImage from "./Pages/host/vans/HostVanImage";
import ReviewBar from "./Components/review/ReviewBar";

function App() {
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="vans" element={<VansPage />} />
      <Route path="vans/:id" element={<VanDetailPage />} />
      <Route path="host" element={<HostLayout />}>
        <Route index element={<HostDashboard />} />
        <Route path="vans" element={<HostVansPage />} />
        <Route path="income"></Route>
        <Route path="vans/:id" element={<HostVanDetailPage />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<Price />} />
          <Route path="photos" element={<HostVanImage />} />
        </Route>
      </Route>
    </Route>
  </Routes>;
}

export default App;

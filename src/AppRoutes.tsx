import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Price from "./Components/Price";
import HostLayout from "./Components/host/HostLayout";
import Layout from "./Components/layout/Layout";
import PageNotFound from "./Pages/PageNotFound";
import AboutPage from "./Pages/about/AboutPage";
import VanDetailPage from "./Pages/details/VanDetailPage";
import HomePage from "./Pages/home/HomePage";
import HostDashboard from "./Pages/host/home/HostDashboard";
import HostReviewPage from "./Pages/host/reviews/HostReviewPage";
import HostVanDetailPage from "./Pages/host/vans/HostVanDetailPage";
import HostVanImage from "./Pages/host/vans/HostVanImage";
import HostVanInfo from "./Pages/host/vans/HostVanInfo";
import HostVansPage from "./Pages/host/vans/HostVansPage";
import HostIncomePage from "./Pages/income/HostIncomePage";
import VansPage from "./Pages/vans/VansPage";
import vansLoader from "./loaders/vansLoader";
import { useContext } from "react";
import { QueryClientContext } from "./main";
import FetchError from "./Components/FetchError";

function AppRoutes() {
  const queryClient = useContext(QueryClientContext);
  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="vans"
          element={<VansPage />}
          loader={() => vansLoader(queryClient)}
          errorElement={<FetchError />}
        />
        <Route path="vans/:id" element={<VanDetailPage />} />
        <Route path="host" element={<HostLayout />}>
          <Route index element={<HostDashboard />} />
          <Route path="vans" element={<HostVansPage />} />
          <Route path="vans/:id" element={<HostVanDetailPage />}>
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<Price />} />
            <Route path="photos" element={<HostVanImage />} />
          </Route>
          <Route path="income" element={<HostIncomePage />} />
          <Route path="reviews" element={<HostReviewPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={appRouter} />;
}
export default AppRoutes;

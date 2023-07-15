import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useParams,
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
import vansLoader from "./router/loaders/vansLoader";
import { useContext } from "react";
import { QueryClientContext } from "./main";
import FetchError from "./Components/FetchError";
import LoginPage from "./Pages/LoginPage";
import vansDetailsLoader from "./router/loaders/vanDetailsLoader";
import requireAuth from "./utils/requireAuth";
import { loginLoader } from "./router/loaders/loginLoader";
import loginFormAction from "./router/actions/loginFormAction";

function AppRoutes() {
  const queryClient = useContext(QueryClientContext);
  const dynamicParams = useParams();
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
        <Route
          path="login"
          element={<LoginPage />}
          loader={(routerData: {
            request: Request;
            params: object;
            context?: object;
          }) => loginLoader(routerData)}
          action={loginFormAction}
        />
        <Route path="vans/:id" element={<VanDetailPage />} />
        <Route
          path="host"
          element={<HostLayout />}
          loader={() => {
            return requireAuth();
          }}
        >
          <Route index element={<HostDashboard />} />
          <Route path="vans" element={<HostVansPage />} />
          <Route
            path="vans/:id"
            element={<HostVanDetailPage />}
            loader={() => vansDetailsLoader(queryClient, dynamicParams.id)}
          >
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

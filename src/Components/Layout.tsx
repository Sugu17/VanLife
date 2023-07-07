import { Outlet } from "react-router-dom";
import Grid from "./AppGrid";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout() {
  return (
    <Grid>
      <NavBar />
      <Outlet />
      <Footer />
    </Grid>
  );
}
export default Layout;

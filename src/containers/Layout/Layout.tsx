import { Outlet, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "./AppBar";

const Layout = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Box mt={2}>
        <div>test</div>
        <Outlet />
      </Box>
    </div>
  );
};

export default Layout;

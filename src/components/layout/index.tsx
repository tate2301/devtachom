import { Box, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import Footer from "../Nav/Footer";
import Navbar from "../Nav/Navbar";
import LetsWorkTogether from "../sections/LetsWorkTogether";

import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" color={useColorModeValue('gray.700', 'gray.400')} transition="0.5s ease-out">
      <Meta />
      <Box>
        <Navbar />
        <Box marginX="auto" as="main">
          {children}
          <div className="my-8">
            <LetsWorkTogether />
          </div>
          <div className="my-8">
            <Footer />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;

export const config = { amp: true }

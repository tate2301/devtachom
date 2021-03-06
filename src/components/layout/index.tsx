import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Footer from "../Nav/Footer";
import Navbar from "../Nav/Navbar";

import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto"  transition="0.5s ease-out">
      <Meta />
      <Box>
        <Navbar />
        <Box marginX="auto" maxWidth={1080} as="main" marginY={22}>
          {children}
          <div className="my-8">
            <Footer />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;

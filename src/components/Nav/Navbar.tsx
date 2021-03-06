import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import ThemeToggle from "../layout/ThemeToggle";
import Logo from "../Logo";
import CloseIcon from "./CloseIcon";
import MenuIcon from "./MenuIcon";
import MenuItem from "./MenuItem";

export default function Navbar(props: any) {
    const [show, setShow] = useState(false);
    const toggleMenu = () => setShow(!show);

    return(
        <Flex 
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={4}
            p={4}
            {...props}
            width="full" 
            borderBottomColor={"gray.200"}>
            <Flex align="center">
                <Logo px={4}/>
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
                {show ? <CloseIcon /> : <MenuIcon />}
            </Box>

            <Box
                display={{ base: show ? "block" : "none", md: "block" }}
                flexBasis={{ base: "100%", md: "auto" }}>
                <Flex
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
                >
                <MenuItem to="/">Case Studies</MenuItem>
                <MenuItem to="/how">Services</MenuItem>
                <MenuItem to="/faetures">About</MenuItem>
                <MenuItem to="/pricing">Blog</MenuItem>
                <MenuItem to="#">
                    <Button
                    leftIcon={<ArrowForwardIcon />}
                    size="sm"
                    colorScheme="green"
                    rounded="md">
                        Start a project
                    </Button>
                </MenuItem>
                <MenuItem to="/#" isLast>
                    <ThemeToggle />
                </MenuItem>
                </Flex>
            </Box>
        </Flex>
    )
}






const Header = (props: any) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      
    </Flex>
  );
};


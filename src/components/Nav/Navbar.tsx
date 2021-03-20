import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ThemeToggle from "../layout/ThemeToggle";
import Logo from "../Logo";
import CloseIcon from "./CloseIcon";
import MenuIcon from "./MenuIcon";
import MenuItem from "./MenuItem";
import "./navbar.module.css";

export default function Navbar(props: any) {
    const [show, setShow] = useState(false);
    const toggleMenu = () => setShow(!show);
    const [scrolled,setScrolled]= useState(false);

    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 50 ){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })

    let navbarClasses=[''];
    if(scrolled){
        navbarClasses.push('scrolled');
    }

    return(
        <Flex 
            className={navbarClasses.join("")}
            zIndex={50}
            top={0}
            left={0}
            position={"fixed"}
            backgroundColor={scrolled || show ? "white" : "none"}
            as="nav"
            w="100%"
            mb={4}
            px={4}
            py={6}
            {...props}
            transition={'background 0.3s ease'}
            borderBottomColor={"gray.200"}
            shadow={scrolled ? "sm" : "none"}>
            <Flex
                w="full"
                align="center"
                justify="space-between"
                wrap="wrap"
                maxWidth={1280} 
                marginX="auto" 
            >
                <Flex align="center">
                    <Logo/>
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
                    {false && <MenuItem to="/how">Process</MenuItem>}
                    <MenuItem to="/services">Services</MenuItem>
                    {false && <MenuItem to="/about">About</MenuItem>}
                    <MenuItem to="/blog">Blog</MenuItem>
                    <MenuItem to="https://ojn1yd5k2bm.typeform.com/to/nA3tGPK2">
                        <Button
                        leftIcon={<ArrowForwardIcon />}
                        outlineColor="gray.900"
                        variant={scrolled ? "solid" : "outline"}
                        colorScheme={scrolled ? "green" : "white"}
                        rounded="none">
                            Start a project
                        </Button>
                    </MenuItem>
                    {false && <MenuItem to="/#" isLast>
                        <ThemeToggle />
                    </MenuItem>}
                    </Flex>
                </Box>
            </Flex>
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


import { Box, Heading, Image } from "@chakra-ui/react"
import AccessibleLink from "./AccessibleLink"

export default function Logo(props: any) {
  return (
    <Box {...props}>
     <AccessibleLink href="/">
        <Image
        boxSize="50px"
        objectFit="cover"
        src={`img/logo-light.png`} alt="Tachom Logo" />
    </AccessibleLink>
    </Box>
  )
}

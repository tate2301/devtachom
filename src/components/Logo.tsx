import { Box, Text, Image, Heading } from "@chakra-ui/react"
import AccessibleLink from "./AccessibleLink"

export default function Logo(props: any) {
  return (
    <Box {...props}>
     <AccessibleLink href="/">
        <Heading fontSize={"xl"} fontWeight={"medium"}>Tachom</Heading>
    </AccessibleLink>
    </Box>
  )
}

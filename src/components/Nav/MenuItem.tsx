import { Text } from "@chakra-ui/react";
import Link from "next/link";

const MenuItem = ({ children, isLast, to = "/", ...rest }: any) => {
    return (
      <Text
        mb={{ base: isLast ? 0 : 8, sm: 0 }}
        mr={{ base: 0, sm: isLast ? 0 : 8 }}
        display="block"
        {...rest}
      >
        <Link href={to}>
            <a>{children}</a>
        </Link>
      </Text>
    );
};

export default MenuItem;
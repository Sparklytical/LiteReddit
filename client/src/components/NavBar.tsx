import { Box, Button, Flex, Link } from "@chakra-ui/core";
import NextLink from "next/link";
import React from "react";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { isServer } from "../utils/isServer";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery({ pause: isServer() });
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  let body = null;

  //loading
  if (fetching) {
  }
  //Not logged in
  else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link mr={4}>Login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link>Register</Link>
        </NextLink>
      </>
    );
  } else {
    //lOggedn in
    body = (
      <Flex>
        <Box mr={3}>{data.me?.username}</Box>
        <Button
          onClick={() => {
            logout();
          }}
          variant="link"
          isLoading={logoutFetching}
        >
          Log Out
        </Button>
      </Flex>
    );
  }

  return (
    <Flex bg="#eee" p={4}>
      <Box ml={"auto"}>{body}</Box>
    </Flex>
  );
};

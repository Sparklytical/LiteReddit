import { withUrqlClient } from "next-urql";
import { Layout } from "../components/Layout";
import { usePostsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { Link, Stack, Heading, Box, Text, Flex } from "@chakra-ui/core";
import NextLink from "next/link";

const Index = () => {
  const [{ data, fetching }] = usePostsQuery({
    variables: {
      limit: 10,
    },
  });

  if (!fetching && !data) {
    return <div>Query failed to fetch</div>;
  }

  return (
    <Layout>
      <Flex align="center">
        <NextLink href="/create-post">
          <Link ml="auto">Create Post</Link>
        </NextLink>
      </Flex>
      <br />

      {!data && fetching ? (
        <div>loading ...</div>
      ) : (
        <Stack spacing={8}>
          {data!.posts.map((post) => (
            <Box key={post.id} shadow="md" borderWidth="1px" p={5}>
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.textSnippet}...</Text>
            </Box>
          ))}
        </Stack>
      )}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);

/* eslint-disable import/no-unresolved */
import {
  Box,
  Heading,
  HStack,
  Link as ChakraLink,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { ConnectWallet } from '@/components/ConnectWallet';
import { useWallet } from '@/web3';

export const AppLayout: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const { isConnected } = useWallet();

  const router = useRouter();

  return (
    <Stack align="center" p="0" m="0" spacing="0">
      <VStack
        p={{ base: 6, lg: 8 }}
        alignItems="center"
        borderBottomRadius="md"
        w="100%"
        maxW="8xl"
        mx="auto"
      >
        <HStack w="100%" justify="space-between" pos="relative">
          <NextLink href="/" passHref>
            <ChakraLink display="block" _hover={{}} w="20%">
              {router.pathname !== '/' && (
                <Heading color="main" fontSize={30} fontWeight="bold">
                  DAOQuest
                </Heading>
              )}
            </ChakraLink>
          </NextLink>
          {router.pathname !== '/' && (
            <HStack gap={4}>
              <NextLink href="/search" passHref>
                <ChakraLink display="block" _hover={{}}>
                  <Text
                    borderBottomWidth={router.pathname === '/search' ? 1 : 0}
                    borderBottomColor="main"
                    color={router.pathname === '/search' ? 'main' : 'inherit'}
                  >
                    SEARCH FOR DAO
                  </Text>
                </ChakraLink>
              </NextLink>
              <NextLink href="/create" passHref>
                <ChakraLink display="block" _hover={{}}>
                  <Text
                    borderBottomWidth={router.pathname === '/create' ? 1 : 0}
                    borderBottomColor="main"
                    color={router.pathname === '/create' ? 'main' : 'inherit'}
                  >
                    CREATE QUEST CHAIN
                  </Text>
                </ChakraLink>
              </NextLink>
              <NextLink href="/overview" passHref>
                <ChakraLink display="block" _hover={{}}>
                  <Text
                    borderBottomWidth={router.pathname === '/overview' ? 1 : 0}
                    borderBottomColor="main"
                    color={router.pathname === '/overview' ? 'main' : 'inherit'}
                  >
                    QUESTS OVERVIEW
                  </Text>
                </ChakraLink>
              </NextLink>
            </HStack>
          )}

          <Box w="20%" textAlign="right">
            {isConnected && <ConnectWallet isHeader />}
          </Box>
          {/* <NavToggle isOpen={isOpen} onClick={toggleOpen} /> */}
        </HStack>
      </VStack>
      <Box
        w="100%"
        h="100%"
        p={{ base: 6, md: 8, lg: 12 }}
        maxW="8xl"
        mx="auto"
      >
        {children}
      </Box>
    </Stack>
  );
};

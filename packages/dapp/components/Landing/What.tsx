import { Flex, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { useRef } from 'react';

import { useOnScreen } from '@/hooks/useOnScreen';

export const What: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);

  return (
    <HStack
      w="full"
      align="start"
      justify="center"
      spacing={[6, 8]}
      minH="69vh"
      bg="dark"
      bgPosition="center"
      bgAttachment="fixed"
      bgSize="cover"
      p={{ base: 4, md: 8, lg: 12 }}
      sx={{
        scrollSnapAlign: 'start',
        scrollSnapStop: 'normal',
      }}
    >
      <Image src="/Circles.svg" alt="circles" />
      <Flex
        ref={ref}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxWidth={{ base: '90%', md: '5xl' }}
        lineHeight={{ base: 'lg', '2xl': '2xl' }}
        pl={{ base: 0, md: 0 }}
        zIndex={100}
        transform={`translate3d(0, ${onScreen ? '0' : '50px'}, 0)`}
        opacity={onScreen ? 1 : 0}
        transition="transform 0.3s 0.1s ease-in-out, opacity 0.3s 0.2s ease-in"
        fontWeight="normal"
        color="white"
      >
        <Heading
          color="main"
          fontSize={79}
          pb={10}
          fontWeight="normal"
          display="flex"
        >
          <Text color="white" mr={6}>
            What
          </Text>
          are we building?
        </Heading>
        <Text fontSize={{ base: 'lg', md: '4xl' }} fontWeight="light">
          We are building a gamified learning / web3 onboarding platform which
          through questing structures rewards users upon completion. Quest
          makers would create quest chains with quests, while questors would
          then complete these quests and get rewarded with NFTs, which would
          showcase their newly acquired skills in profiles.
        </Text>
      </Flex>
    </HStack>
  );
};
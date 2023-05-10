import { HStack, Spacer, Text, VStack, Image } from '@chakra-ui/react';
import React from 'react';
import ReactImage from '../assets/react.svg';

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <VStack width="full" py="24px" top={0}>
      <HStack
        width="full"
        height="full"
        alignItems="center"
        justifyContent="center"
      >
        <Spacer />
        <Image src={ReactImage} />
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="extrabold"
        >
          Learning Buddy
        </Text>
        <Spacer />
      </HStack>
      {children}
    </VStack>
  );
};

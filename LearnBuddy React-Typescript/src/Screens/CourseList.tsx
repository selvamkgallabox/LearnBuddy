import {
  Box,
  Button,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../Components/Layout';
import { courseList } from '../Mockdata';
import ReactImage from '../assets/react.svg';

const CourseList: React.FC = () => {
  const navigate = useNavigate();
  const handleView = (id: string) => {
    navigate(`courseDetails/${id}`);
  };
  return (
    <Layout>
      <Wrap
        width="full"
        spacing="24px"
        paddingLeft="10px"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        {courseList?.map((course, idx) => {
          return (
            <WrapItem
              key={idx}
              border="1px"
              borderColor="gray.200"
              p="10px"
              width="sm"
              rounded="base"
            >
              <HStack width="full">
                <VStack alignItems="flex-start" spacing={0}>
                  <Box alignItems="flex-start">
                    <Image
                      src={ReactImage}
                      maxWidth="full"
                      width="full"
                      overflow="hidden"
                      margin="0 auto"
                    />
                  </Box>
                  <Text
                    textAlign="left"
                    fontSize="md"
                    fontWeight="medium"
                    color="gray.900"
                  >
                    {course.courseName}
                  </Text>
                  <Text
                    textAlign="left"
                    fontSize="sm"
                    color="gray.500"
                    fontWeight="normal"
                  >
                    {course.description}
                  </Text>
                </VStack>
                <Spacer />
                <Button
                  size="sm"
                  fontSize="sm"
                  colorScheme="blue"
                  fontWeight="medium"
                  borderRadius="6px"
                  onClick={() => handleView(course.courseId)}
                >
                  View
                </Button>
              </HStack>
            </WrapItem>
          );
        })}
      </Wrap>
    </Layout>
  );
};

export default CourseList;

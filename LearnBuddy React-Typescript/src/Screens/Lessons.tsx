import { HStack, Spacer, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../Components/Layout';
import { courseList, lessonsList } from '../Mockdata';

const Lessons: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const courseName =
    courseList?.find((c) => c.courseId === courseId)?.courseName ?? '';

  const selectedLessons =
    lessonsList.find((c) => c.courseId === courseId)?.lessons ?? [];

  return (
    <Layout>
      <VStack px="24px" alignItems="flex-start" width="full" height="full">
        <Text fontSize="xl" fontWeight="semibold" color="gray.900">
          {courseName}
        </Text>
      </VStack>
      {selectedLessons?.map((lesson, idx) => {
        return (
          <VStack key={idx} width="full">
            <HStack
              width="full"
              border="1px"
              borderColor="gray.200"
              borderRadius="base"
            >
              <Text textAlign="left" fontSize="md" fontWeight="medium">
                {lesson.lessonName}
              </Text>
              <Spacer />
            </HStack>
          </VStack>
        );
      })}
    </Layout>
  );
};

export default Lessons;

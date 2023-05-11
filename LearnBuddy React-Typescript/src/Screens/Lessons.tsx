import {
  Button,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { MdArrowBackIosNew } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '../Components/Layout';
import { useQueryParam } from '../CustomHooks';
import { courseList, lessonsList } from '../Mockdata';
import VideoAndQuiz from './VideoAndQuiz';

const Lessons: React.FC = () => {
  const [completedLessonId, setCompletedLessonId] = React.useState<string>('');
  const [selectedLesson, setSelectedLesson] = React.useState<number>(0);
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const query = useQueryParam();
  const lessonId = query.get('lessonId');
  const isLessonSelected = Boolean(lessonId);

  const courseName =
    courseList?.find((c) => c.courseId === courseId)?.courseName ?? '';

  const selectedLessons =
    lessonsList.find((c) => c.courseId === courseId)?.lessons ?? [];

  const selectedLessonVideoURL =
    selectedLessons?.find((v) => v.lessonId === lessonId)?.videoURL ?? '';

  const handleClick = () => {
    navigate('/');
  };

  const handleViewCourse = (id: string) => {
    navigate({ search: `?lessonId=${id}` });
  };

  const onFinishQuiz = (lessonId: string) => {
    setCompletedLessonId(lessonId);
    setSelectedLesson((prev) => prev + 1);
    navigate(`/courseDetails/${courseId}`);
  };

  if (isLessonSelected)
    return (
      <VideoAndQuiz
        courseId={lessonId as string}
        handleFinish={onFinishQuiz}
        selectedLessonVideoURL={selectedLessonVideoURL}
      />
    );

  return (
    <Layout>
      <VStack px="24px" alignItems="flex-start" width="full" height="full">
        <HStack width="full">
          <IconButton
            aria-label="backIcon"
            size="sm"
            bgColor="unset"
            onClick={handleClick}
            icon={<MdArrowBackIosNew />}
          />
          <Text fontSize="xl" fontWeight="semibold" color="gray.900">
            {courseName}
          </Text>
        </HStack>
        {selectedLessons?.map((lesson, idx) => {
          const completed = completedLessonId === lesson.lessonId;
          return (
            <VStack key={idx} width="full">
              <HStack width="full">
                <Icon
                  as={BsFillCheckSquareFill}
                  boxSize="8"
                  color={completed ? 'green.500' : 'gray.500'}
                />
                <Button
                  w="full"
                  variant="outline"
                  isDisabled={selectedLesson != idx}
                  onClick={() => handleViewCourse(lesson.lessonId)}
                >
                  {lesson.lessonName}
                </Button>
              </HStack>
            </VStack>
          );
        })}
      </VStack>
    </Layout>
  );
};

export default Lessons;

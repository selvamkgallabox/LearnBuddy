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
import { Lesson } from '../types';

const Lessons: React.FC = () => {
  const [selectedLessonIndex, setSelectedLessonIndex] =
    React.useState<number>(0);
  const [selectedLesson, setSelectedLesson] = React.useState<Lesson[]>([]);
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const query = useQueryParam();
  const lessonId = query.get('lessonId');
  const isLessonSelected = Boolean(lessonId);

  const selectedLessons =
    lessonsList.find((c) => c.courseId === courseId)?.lessons ?? [];

  React.useEffect(() => {
    const prevLessons = window.localStorage.getItem(`${courseId}`);
    if (prevLessons != null) {
      setSelectedLesson(JSON.parse(prevLessons));
    } else {
      setSelectedLesson(selectedLessons);
    }
  }, [courseId]);

  const courseName =
    courseList?.find((c) => c.courseId === courseId)?.courseName ?? '';

  const selectedLessonVideoURL =
    selectedLessons?.find((v) => v.lessonId === lessonId)?.videoURL ?? '';

  const handleClick = () => {
    navigate('/');
  };

  const handleViewCourse = (id: string) => {
    navigate({ search: `?lessonId=${id}` });
  };

  const onFinishQuiz = (lessonId: string) => {
    const updatedList = selectedLesson.map((v) => {
      if (v.lessonId === lessonId) {
        return { ...v, isComplete: !v.isComplete };
      }
      return v;
    });
    setSelectedLesson(updatedList);
    window.localStorage.setItem(`${courseId}`, JSON.stringify(updatedList));
    navigate(`/courseDetails/${courseId}`);
  };

  const isLessonDisabled = (id: number) => {
    return (
      id > selectedLessonIndex &&
      !selectedLesson[selectedLessonIndex].isComplete
    );
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
        {selectedLesson?.map((lesson, idx) => {
          return (
            <VStack key={idx} width="full">
              <HStack width="full">
                <Icon
                  as={BsFillCheckSquareFill}
                  boxSize="8"
                  color={lesson.isComplete ? 'green.500' : 'gray.500'}
                />
                one should not go to next lesson until he complete first one but
                first lessin always enabled ?
                <Button
                  w="full"
                  variant="outline"
                  isDisabled={isLessonDisabled(idx)}
                  onClick={() => {
                    if (selectedLesson[selectedLessonIndex].isComplete) {
                      setSelectedLessonIndex(idx);
                    }
                    handleViewCourse(lesson.lessonId);
                  }}
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

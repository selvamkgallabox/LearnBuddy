import { Button, HStack, Spacer, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { LessonsQuizList } from '../Mockdata';

interface QuizComponentProps {
  courseId: string;
  handleFinish: (lessonId: string) => void;
}

const QuizComponent: React.FC<QuizComponentProps> = (props) => {
  const { courseId, handleFinish } = props;
  const [activeQuestion, setActiveQuestion] = React.useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState<boolean>(false);
  const [index, setIndex] = React.useState<number | null>(null);

  const questionsList =
    LessonsQuizList.find((v) => v.lessonId === courseId)?.questions ?? [];

  const { choices, question, correct } = questionsList[activeQuestion] ?? {};

  const isLastQuestion = questionsList.length - 1 === activeQuestion;

  const handleSelectAnswer = (v: string, idx: number) => {
    if (v === correct) {
      setSelectedAnswer(true);
      setIndex(idx);
    } else {
      setSelectedAnswer(false);
      setIndex(null);
    }
  };

  const handleNext = () => {
    setActiveQuestion((prev) => prev + 1);
    setSelectedAnswer(false);
    setIndex(null);
  };

  const onFinish = () => {
    setActiveQuestion(0);
    setSelectedAnswer(false);
    setIndex(null);
    handleFinish(courseId);
  };

  return (
    <VStack width="full" spacing="24px" height="full" overflow="hidden">
      <Text fontSize="xl" fontWeight="extrabold" textAlign="center">
        Quiz Time
      </Text>
      <Text maxWidth="full" fontSize="md" fontWeight="bold" color="gray.900">
        {question}
      </Text>
      {choices?.map((v, idx) => {
        return (
          <Button
            onClick={() => handleSelectAnswer(v, idx)}
            size="sm"
            width="sm"
            colorScheme={index == idx ? 'green' : 'gray'}
            borderRadius="6px"
            key={idx}
          >
            {v}
          </Button>
        );
      })}
      <HStack width="full">
        <Spacer />
        {isLastQuestion ? (
          <Button
            isDisabled={!Boolean(selectedAnswer)}
            size="sm"
            onClick={onFinish}
            colorScheme="blue"
          >
            Finish
          </Button>
        ) : (
          <Button
            size="sm"
            isDisabled={!Boolean(selectedAnswer)}
            colorScheme="blue"
            onClick={handleNext}
          >
            Next Question
          </Button>
        )}
      </HStack>
    </VStack>
  );
};

export default QuizComponent;

import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spacer,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import ReactPlayer from 'react-player';
import { Layout } from '../Components/Layout';
import QuizComponent from '../Components/QuizComponent';
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIosNew } from 'react-icons/md';

interface VideoAndQuizProps {
  courseId: string;
  handleFinish: (lessonId: string) => void;
  selectedLessonVideoURL: string;
}

const VideoAndQuiz: React.FC<VideoAndQuizProps> = (props) => {
  const { courseId, handleFinish, selectedLessonVideoURL } = props;
  const { isOpen, onClose, onOpen } = useDisclosure();
  const navigate = useNavigate();

  const onCompleted = () => {
    onOpen();
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <HStack width="full" pl={20}>
        <Button leftIcon={<MdArrowBackIosNew />} onClick={handleBack} size="sm">
          Back
        </Button>
      </HStack>
      <VStack width="full" height="full">
        <ReactPlayer
          url={selectedLessonVideoURL}
          controls
          onEnded={onCompleted}
        />
      </VStack>
      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p="24px">
            <QuizComponent
              key={courseId}
              courseId={courseId}
              handleFinish={handleFinish}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Layout>
  );
};

export default VideoAndQuiz;

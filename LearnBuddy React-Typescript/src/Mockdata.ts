import { CourseListData, LessonQuiz, LessonsList } from './types';

export const courseList: CourseListData[] = [
  {
    courseId: '0001',
    courseName: 'Introduction to Programming',
    description:
      'Learn the basics of programming with this beginner-friendly course',
    imageUrl:
      'https://cdn.pixabay.com/photo/2015/05/28/14/38/mobile-788324_960_720.jpg',
  },
  {
    courseId: '0002',
    courseName: 'Web Development Fundamentals',
    description:
      'Master the essentials of web development with this comprehensive course',
    imageUrl: 'https://www.example.com/images/web_dev_fundamentals.jpg',
  },
  {
    courseId: '0003',
    courseName: 'Data Science with Python',
    description:
      'Discover the power of data science and machine learning with Python',
    imageUrl: 'https://www.example.com/images/data_science_python.jpg',
  },
  {
    courseId: '0004',
    courseName: 'iOS App Development',
    description:
      'Create your own iOS apps from scratch with this hands-on course',
    imageUrl: 'https://www.example.com/images/ios_app_dev.jpg',
  },
  {
    courseId: '0005',
    courseName: 'Database Fundamentals',
    description: 'Learn the basics of databases and SQL with this course',
    imageUrl: 'https://www.example.com/images/database_fundamentals.jpg',
  },
];

export const lessonsList: LessonsList[] = [
  {
    courseId: '0001',
    lessons: [
      {
        lessonId: 'L001',
        lessonName: 'Introduction to React',
        videoURL: 'https://youtu.be/Y6aYx_KKM7A',
        isComplete: false,
      },
      {
        lessonId: 'L002',
        lessonName: 'Building Components',
        videoURL: 'https://youtu.be/Ib-80HIjuZ4',
        isComplete: false,
      },
    ],
  },
  {
    courseId: '0002',
    lessons: [
      {
        lessonId: 'L001',
        lessonName: 'Getting Started with Angular',
        videoURL: 'https://youtu.be/novnyCaa7To',
        isComplete: false,
      },
      {
        lessonId: 'L002',
        lessonName: 'Creating Services',
        videoURL: 'https://youtu.be/novnyCaa7To',
        isComplete: false,
      },
      {
        lessonId: 'L003',
        lessonName: 'Routing and Navigation',
        videoURL: 'https://youtu.be/novnyCaa7To',
        isComplete: false,
      },
    ],
  },
  {
    courseId: '0003',
    lessons: [
      {
        lessonId: 'L001',
        lessonName: 'Fundamentals of HTML',
        videoURL: 'https://youtu.be/gvkqT_Uoahw',
        isComplete: false,
      },
      {
        lessonId: 'L002',
        lessonName: 'Styling with CSS',
        videoURL: 'https://youtu.be/gvkqT_Uoahw',
        isComplete: false,
      },
      {
        lessonId: 'L003',
        lessonName: 'Layouts with Flexbox',
        videoURL: 'https://youtu.be/gvkqT_Uoahw',
        isComplete: false,
      },
    ],
  },
  {
    courseId: '0004',
    lessons: [
      {
        lessonId: 'L001',
        lessonName: 'Introduction to Node.js',
        videoURL: 'https://youtu.be/F0G9lZ7gecE',
        isComplete: false,
      },
      {
        lessonId: 'L002',
        lessonName: 'Working with Express.js',
        videoURL: 'https://youtu.be/F0G9lZ7gecE',
        isComplete: false,
      },
      {
        lessonId: 'L003',
        lessonName: 'Building RESTful APIs',
        videoURL: 'https://youtu.be/F0G9lZ7gecE',
        isComplete: false,
      },
    ],
  },
  {
    courseId: '0005',
    lessons: [
      {
        lessonId: 'L001',
        lessonName: 'Introduction to Python',
        videoURL: 'https://youtu.be/F0G9lZ7gecE',
        isComplete: false,
      },
      {
        lessonId: 'L002',
        lessonName: 'Working with Data Types',
        videoURL: 'https://youtu.be/F0G9lZ7gecE',
        isComplete: false,
      },
      {
        lessonId: 'L003',
        lessonName: 'Control Flow and Loops',
        videoURL: 'https://youtu.be/F0G9lZ7gecE',
        isComplete: false,
      },
    ],
  },
];

export const LessonsQuizList: LessonQuiz[] = [
  {
    lessonId: 'L001',
    questions: [
      {
        question: 'Pick One Correct Answer ?',
        choices: ['useRemo', 'useMemo', 'useCameo'],
        correct: 'useMemo',
      },
      {
        question: 'What is React',
        choices: [
          'React is a Public library',
          'React is a programming Book',
          'React is a frontend library',
        ],
        correct: 'React is a frontend library',
      },
      {
        question: 'What is Javascript ?',
        choices: ['iceCream', 'Programming Language', 'Cake'],
        correct: 'Programming Language',
      },
    ],
  },
  {
    lessonId: 'L002',
    questions: [
      {
        question: 'What is Redux ?',
        choices: ['Watch', 'State Management Library', 'Knife'],
        correct: 'State Management Library',
      },
      {
        question: 'Which is Not FrameWork ?',
        choices: ['Vanilla JS', 'React', 'Solid JS'],
        correct: 'Vanilla JS',
      },
      {
        question: 'What is Babel ?',
        choices: ['Bundler', 'CSS FrameWork', 'Browser API'],
        correct: 'Bundler',
      },
    ],
  },
  {
    lessonId: 'L003',
    questions: [
      {
        question: 'What is Redux ?',
        choices: ['Watch', 'State Management Library', 'Knife'],
        correct: 'State Management Library',
      },
      {
        question: 'Which is Not FrameWork ?',
        choices: ['Vanilla JS', 'React', 'Solid JS'],
        correct: 'Vanilla JS',
      },
      {
        question: 'What is Babel ?',
        choices: ['Bundler', 'CSS FrameWork', 'Browser API'],
        correct: 'Bundler',
      },
    ],
  },
  {
    lessonId: 'L004',
    questions: [
      {
        question: 'What is Redux ?',
        choices: ['Watch', 'State Management Library', 'Knife'],
        correct: 'State Management Library',
      },
      {
        question: 'Which is Not FrameWork ?',
        choices: ['Vanilla JS', 'React', 'Solid JS'],
        correct: 'Vanilla JS',
      },
      {
        question: 'What is Babel ?',
        choices: ['Bundler', 'CSS FrameWork', 'Browser API'],
        correct: 'Bundler',
      },
    ],
  },
  {
    lessonId: 'L005',
    questions: [
      {
        question: 'What is Redux ?',
        choices: ['Watch', 'State Management Library', 'Knife'],
        correct: 'State Management Library',
      },
      {
        question: 'Which is Not FrameWork ?',
        choices: ['Vanilla JS', 'React', 'Solid JS'],
        correct: 'Vanilla JS',
      },
      {
        question: 'What is Babel ?',
        choices: ['Bundler', 'CSS FrameWork', 'Browser API'],
        correct: 'Bundler',
      },
    ],
  },
];

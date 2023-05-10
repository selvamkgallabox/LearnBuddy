import { CourseListData, LessonsList } from './types';

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
  {
    courseId: '0006',
    courseName: 'JavaScript Essentials',
    description: 'Master the fundamentals of JavaScript programming',
    imageUrl: 'https://www.example.com/images/js_essentials.jpg',
  },
  {
    courseId: '0007',
    courseName: 'Digital Marketing',
    description:
      'Learn the basics of digital marketing and boost your online presence',
    imageUrl: 'https://www.example.com/images/digital_marketing.jpg',
  },
  {
    courseId: '0008',
    courseName: 'Python for Beginners',
    description:
      'Learn Python from scratch and start building your own projects',
    imageUrl: 'https://www.example.com/images/python_for_beginners.jpg',
  },
  {
    courseId: '0009',
    courseName: 'Artificial Intelligence',
    description:
      'Discover the power of AI and learn how to build intelligent systems',
    imageUrl: 'https://www.example.com/images/ai.jpg',
  },
  {
    courseId: '0010',
    courseName: 'Mobile App Design',
    description: 'Learn how to design beautiful and functional mobile apps',
    imageUrl: 'https://www.example.com/images/mobile_app_design.jpg',
  },
];

export const lessonsList: LessonsList[] = [
  {
    courseId: '0001',
    lessons: [
      {
        lessonId: 'L001',
        lessonName: 'Introduction to React',
      },
      {
        lessonId: 'L002',
        lessonName: 'Building Components',
      },
    ],
  },
  {
    courseId: '0002',
    lessons: [
      {
        lessonId: 'L001',
        lessonName: 'Getting Started with Angular',
      },
      {
        lessonId: 'L002',
        lessonName: 'Creating Services',
      },
      {
        lessonId: 'L003',
        lessonName: 'Routing and Navigation',
      },
    ],
  },
  {
    courseId: '0003',
    lessons: [
      {
        lessonId: 'L001',
        lessonName: 'Fundamentals of HTML',
      },
      {
        lessonId: 'L002',
        lessonName: 'Styling with CSS',
      },
      {
        lessonId: 'L003',
        lessonName: 'Layouts with Flexbox',
      },
      {
        lessonId: 'L004',
        lessonName: 'Responsive Design',
      },
    ],
  },
  {
    courseId: '0004',
    lessons: [
      {
        lessonId: 'L001',
        lessonName: 'Introduction to Node.js',
      },
      {
        lessonId: 'L002',
        lessonName: 'Working with Express.js',
      },
      {
        lessonId: 'L003',
        lessonName: 'Building RESTful APIs',
      },
    ],
  },
  {
    courseId: '0005',
    lessons: [
      {
        lessonId: 'L001',
        lessonName: 'Introduction to Python',
      },
      {
        lessonId: 'L002',
        lessonName: 'Working with Data Types',
      },
      {
        lessonId: 'L003',
        lessonName: 'Control Flow and Loops',
      },
      {
        lessonId: 'L004',
        lessonName: 'Functions and Modules',
      },
      {
        lessonId: 'L005',
        lessonName: 'Working with Files',
      },
    ],
  },
];

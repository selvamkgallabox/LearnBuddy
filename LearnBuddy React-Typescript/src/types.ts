export interface CourseListData {
  courseName: string;
  description: string;
  courseId: string;
  imageUrl: string;
}

export interface Lesson {
  lessonName: string;
  lessonId: string;
  videoURL?: string;
}

export interface LessonsList {
  courseId: string;
  lessons: Lesson[];
}

export interface QuestionList {
  question: string;
  choices: string[];
  correct: string;
}

export interface LessonQuiz {
  lessonId: string;
  questions: QuestionList[];
}

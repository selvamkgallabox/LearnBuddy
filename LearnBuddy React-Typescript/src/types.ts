export interface CourseListData {
  courseName: string;
  description: string;
  courseId: string;
  imageUrl: string;
}

interface Lesson {
  lessonName: string;
  lessonId: string;
}

export interface LessonsList {
  courseId: string;
  lessons: Lesson[];
}

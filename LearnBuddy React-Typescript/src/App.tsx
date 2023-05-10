import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CourseList from './Screens/CourseList';
import Lessons from './Screens/Lessons';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="courseDetails/:courseId" element={<Lessons />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

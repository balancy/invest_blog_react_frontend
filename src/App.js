import { useEffect, useState } from 'react';
import ApiService from './API/ApiService';
import MainCourseElement from './components/UI/MainCourseElement';
import './styles/App.css';

function App() {
  const [courses, setCourses] = useState(null)

  useEffect(async () => setCourses(await ApiService.fetchCourses()), [])

  return (
    <div className="App">
      <h1>Курсы</h1>
      <hr />
      {courses && (
        <div className="courses">
          {courses.map((course, index) => (
            <div key={index}>
              <MainCourseElement index={index + 1} course={course} />
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

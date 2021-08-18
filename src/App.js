import { useEffect, useState } from 'react';
import './styles/App.css';
import configData from "./config.json";
import MainCourseElement from './components/UI/MainCourseElement';

function App() {
  const [courses, setCourses] = useState(null)

  useEffect(() => {
    async function fetchCourses() {
      const coursesUrl = configData.HOST + configData.COURSES_RELATIVE_URL
      const response = await fetch(coursesUrl);
      const data = await response.json();

      setCourses(data);
    }

    fetchCourses()
  }, [])

  return (
    <div className="App">
      <h1>Курсы</h1>
      <hr/>
      {courses && (
        <div className="courses">
          {courses.map((course, index) => (
            <div key={index}>
              <MainCourseElement index={index + 1} course={course} />
              <hr/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

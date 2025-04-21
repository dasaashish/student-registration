import { useState } from "react";
import CourseTypeManager from "./components/CourseTypeManager";
import CourseManager from "./components/CourseManager";
import CourseOfferingManager from "./components/CourseOfferingManager";
import StudentRegistrationManager from "./components/StudentRegistrationManager";
import './style.css';


function App() {
  const [courseTypes, setCourseTypes] = useState([]);
  const [courses, setCourses] = useState([]);
  const [offerings, setOfferings] = useState([]);

  return (
    <div>
      <h1>Student Registration System</h1>
      <CourseTypeManager />
      <CourseManager />
      <CourseOfferingManager
        courses={courses}
        courseTypes={courseTypes}
      />
      <StudentRegistrationManager offerings={offerings} />
    </div>
  );
}

export default App;

import { useState } from "react";

function CourseOfferingManager({ courses, courseTypes }) {
  const [offerings, setOfferings] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedCourseType, setSelectedCourseType] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingCourse, setEditingCourse] = useState("");
  const [editingCourseType, setEditingCourseType] = useState("");

  const addOffering = () => {
    if (selectedCourse && selectedCourseType) {
      setOfferings([
        ...offerings,
        { course: selectedCourse, courseType: selectedCourseType },
      ]);
      setSelectedCourse("");
      setSelectedCourseType("");
    }
  };

  const deleteOffering = (index) => {
    const updated = [...offerings];
    updated.splice(index, 1);
    setOfferings(updated);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingCourse(offerings[index].course);
    setEditingCourseType(offerings[index].courseType);
  };

  const saveEdit = () => {
    const updated = [...offerings];
    updated[editingIndex] = { course: editingCourse, courseType: editingCourseType };
    setOfferings(updated);
    setEditingIndex(null);
    setEditingCourse("");
    setEditingCourseType("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Course Offering Manager</h2>

      <select
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}
      >
        <option value="">Select Course</option>
        {courses.map((course, index) => (
          <option key={index} value={course}>
            {course}
          </option>
        ))}
      </select>

      <select
        value={selectedCourseType}
        onChange={(e) => setSelectedCourseType(e.target.value)}
      >
        <option value="">Select Course Type</option>
        {courseTypes.map((courseType, index) => (
          <option key={index} value={courseType}>
            {courseType}
          </option>
        ))}
      </select>

      <button onClick={addOffering}>Add Offering</button>

      <ul>
        {offerings.map((offering, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <>
                <select
                  value={editingCourse}
                  onChange={(e) => setEditingCourse(e.target.value)}
                >
                  {courses.map((course, i) => (
                    <option key={i} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
                <select
                  value={editingCourseType}
                  onChange={(e) => setEditingCourseType(e.target.value)}
                >
                  {courseTypes.map((courseType, i) => (
                    <option key={i} value={courseType}>
                      {courseType}
                    </option>
                  ))}
                </select>
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                {offering.course} - {offering.courseType}
                <button onClick={() => startEditing(index)}>Edit</button>
                <button onClick={() => deleteOffering(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseOfferingManager;

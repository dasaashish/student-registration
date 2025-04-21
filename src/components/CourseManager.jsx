import { useState } from "react";

function CourseManager() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  const addCourse = () => {
    if (newCourse.trim()) {
      setCourses([...courses, newCourse.trim()]);
      setNewCourse("");
    }
  };

  const deleteCourse = (index) => {
    const updated = [...courses];
    updated.splice(index, 1);
    setCourses(updated);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingValue(courses[index]);
  };

  const saveEdit = () => {
    const updated = [...courses];
    updated[editingIndex] = editingValue.trim();
    setCourses(updated);
    setEditingIndex(null);
    setEditingValue("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Course Manager</h2>

      <input
        value={newCourse}
        onChange={(e) => setNewCourse(e.target.value)}
        placeholder="Enter course name"
      />
      <button onClick={addCourse}>Add</button>

      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <>
                <input
                  value={editingValue}
                  onChange={(e) => setEditingValue(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                {course}
                <button onClick={() => startEditing(index)}>Edit</button>
                <button onClick={() => deleteCourse(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseManager;

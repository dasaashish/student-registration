import { useState } from "react";

function CourseTypeManager() {
  const [courseTypes, setCourseTypes] = useState([]);
  const [newType, setNewType] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  const addCourseType = () => {
    if (newType.trim()) {
      setCourseTypes([...courseTypes, newType.trim()]);
      setNewType("");
    }
  };

  const deleteCourseType = (index) => {
    const updated = [...courseTypes];
    updated.splice(index, 1);
    setCourseTypes(updated);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingValue(courseTypes[index]);
  };

  const saveEdit = () => {
    const updated = [...courseTypes];
    updated[editingIndex] = editingValue.trim();
    setCourseTypes(updated);
    setEditingIndex(null);
    setEditingValue("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Course Type Manager</h2>

      <input
        value={newType}
        onChange={(e) => setNewType(e.target.value)}
        placeholder="Enter course type"
      />
      <button onClick={addCourseType}>Add</button>

      <ul>
        {courseTypes.map((type, index) => (
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
                {type}
                <button onClick={() => startEditing(index)}>Edit</button>
                <button onClick={() => deleteCourseType(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseTypeManager;

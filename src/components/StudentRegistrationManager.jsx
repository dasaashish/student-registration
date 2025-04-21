import { useState } from "react";

function StudentRegistrationManager({ offerings }) {
  const [registrations, setRegistrations] = useState([]);
  const [selectedOffering, setSelectedOffering] = useState("");
  const [studentName, setStudentName] = useState("");

  const registerStudent = () => {
    if (studentName.trim() && selectedOffering) {
      setRegistrations([
        ...registrations,
        { name: studentName.trim(), offering: selectedOffering },
      ]);
      setStudentName("");
    }
  };

  const filterOfferings = (courseType) => {
    return offerings.filter(
      (offering) => offering.courseType === courseType
    );
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Student Registration</h2>

      <input
        type="text"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        placeholder="Enter student name"
      />
      <select
        value={selectedOffering}
        onChange={(e) => setSelectedOffering(e.target.value)}
      >
        <option value="">Select Course Offering</option>
        {offerings.map((offering, index) => (
          <option key={index} value={offering.course + " - " + offering.courseType}>
            {offering.course} - {offering.courseType}
          </option>
        ))}
      </select>

      <button onClick={registerStudent}>Register</button>

      <h3>Registered Students</h3>
      <ul>
        {registrations.map((registration, index) => (
          <li key={index}>
            {registration.name} ({registration.offering})
          </li>
        ))}
      </ul>

      <h3>Filter Offerings by Course Type</h3>
      <select onChange={(e) => filterOfferings(e.target.value)}>
        <option value="">Select Course Type</option>
        {["Individual", "Group", "Special"].map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>

      <ul>
        {filterOfferings("Individual").map((offering, index) => (
          <li key={index}>{offering.course}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentRegistrationManager;

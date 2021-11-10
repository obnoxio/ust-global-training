import { useState } from "react";
import "../mytable.css";
function Student() {
  const [studentid, setstudentid] = useState("");
  const [studentname, setstudentname] = useState("");
  const [address, setaddress] = useState("");
  const [coursename, setcoursename] = useState("");
  return (
    <>
      <table className="Table">
        <thead className="Table-header">
          <tr>
            <th colSpan="4">
              <h1>STUDENT DETAILS</h1>
            </th>
          </tr>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Course Name</th>
          </tr>
        </thead>
        <tr className="Table-body">
          <td>{studentid}</td>
          <td>{studentname}</td>
          <td>{address}</td>
          <td>{coursename}</td>
        </tr>
        <tr className="Table-body">
          <td>
            <input id="studentid" type="text"></input>
          </td>
          <td>
            <input id="studentname" type="text"></input>
          </td>
          <td>
            <input id="address" type="text"></input>
          </td>
          <td>
            <input id="coursename" type="text"></input>
          </td>
        </tr>
        <tr className="Table-body">
          <td colSpan="4">
            <button
              onClick={() => {
                setstudentid(document.getElementById("studentid").value);
                setstudentname(document.getElementById("studentname").value);
                setaddress(document.getElementById("address").value);
                setcoursename(document.getElementById("coursename").value);
              }}
              type="button"
              className="button-del"
            >
              Add Student
            </button>
          </td>
        </tr>
      </table>
    </>
  );
}

export default Student;
import React, { useState } from "react";
import "./App.css";
import Task4Display from "./Components/Task4Display";
import Task4Input from "./Components/Task4Input";
import InputData from "./Components/InputData";
import Task2Data from "./Components/Task2Data";
import Task2Display from "./Components/Task2Display";
import Task3Data from "./Components/Task3Data";
import Task3Display from "./Components/Task3Display";

function App() {
  // Task2
  const [submittedData, setSubmittedData] = useState("");
  const addDataHandler = (data) => {
    setSubmittedData(data);
  };

  //task3
  const [submitData, setSubmitData] = useState([]);
  const addDataHandlerFunc = (data) => {
    setSubmitData((prevData) => [...prevData, data]);
  };

  //task4
  const [submitDataInput, setSubmitDataInput] = useState([]);
  const addDataHand = (data) => {
    setSubmitDataInput((prevData) => {
      return [...prevData, data];
    });
  };

  const handleDelete = (id) => {
    const afterDeleteData = submitDataInput.filter((data) => data.id !== id);
    setSubmitDataInput(afterDeleteData);
  };

  return (
    <div className="App">
      <table>
        <tr>
          <td>
            {/* Task1 */}
            <div className="box">
              <h3>Task 1</h3>
              <InputData />
            </div>
          </td>
          <td>
            {/* Task2 */}
            <div className="box">
              <h3>Task 2</h3>
              <Task2Data addDataHandler={addDataHandler} />
              <Task2Display submittedData={submittedData} />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            {/* Task3 */}
            <div className="box">
              <h3>Task 3</h3>
              <Task3Data addDataHandlerFunc={addDataHandlerFunc} />
              <Task3Display submitData={submitData} />
            </div>
          </td>
          <td>
            {/* task4 */}
            <div className="box">
              <h3>Task 4</h3>
              <Task4Input addDataHand={addDataHand} />
              <Task4Display
                submitDataInput={submitDataInput}
                handleDelete={handleDelete}
              />
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;

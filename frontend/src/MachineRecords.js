import React, { useState, useEffect } from "react";
import axios from "axios";

function MachineRecords() {
  const [records, setRecords] = useState([]);
  const [newRecord, setNewRecord] = useState({ fields: {} });

  useEffect(() => {
    axios.get("http://localhost:8080/machines").then(res => setRecords(res.data));
  }, []);

  const addRecord = async () => {
    await axios.post("http://localhost:8080/machines", newRecord);
    const res = await axios.get("http://localhost:8080/machines");
    setRecords(res.data);
  };

  return (
    <div>
      <h2>Machine Records</h2>
      <input placeholder="Machine Name" onChange={e => setNewRecord({ fields: { ...newRecord.fields, "Machine Name": e.target.value } })}/>
      <input placeholder="Temperature" onChange={e => setNewRecord({ fields: { ...newRecord.fields, "Temperature": e.target.value } })}/>
      <input placeholder="Pressure" onChange={e => setNewRecord({ fields: { ...newRecord.fields, "Pressure": e.target.value } })}/>
      <select onChange={e => setNewRecord({ fields: { ...newRecord.fields, "Vibration": e.target.value } })}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={addRecord}>Add Record</button>

      <ul>
        {records.map(r => (
          <li key={r.id}>ID {r.id} → {JSON.stringify(r.fields)}</li>
        ))}
      </ul>
    </div>
  );
}

export default MachineRecords;

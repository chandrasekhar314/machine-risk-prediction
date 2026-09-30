import React, { useState, useEffect } from "react";
import axios from "axios";

function FieldConfig() {
  const [fields, setFields] = useState([]);
  const [newField, setNewField] = useState({ fieldName: "", fieldType: "", required: false });

  useEffect(() => {
    axios.get("http://localhost:8080/fields").then(res => setFields(res.data));
  }, []);

  const addField = async () => {
    await axios.post("http://localhost:8080/fields", newField);
    const res = await axios.get("http://localhost:8080/fields");
    setFields(res.data);
  };

  return (
    <div>
      <h2>Field Configuration</h2>
      <input placeholder="Field Name" onChange={e => setNewField({ ...newField, fieldName: e.target.value })}/>
      <select onChange={e => setNewField({ ...newField, fieldType: e.target.value })}>
        <option value="Text">Text</option>
        <option value="Number">Number</option>
        <option value="Dropdown">Dropdown</option>
      </select>
      <button onClick={addField}>Add Field</button>

      <ul>
        {fields.map(f => (
          <li key={f.id}>{f.fieldName} ({f.fieldType})</li>
        ))}
      </ul>
    </div>
  );
}

export default FieldConfig;

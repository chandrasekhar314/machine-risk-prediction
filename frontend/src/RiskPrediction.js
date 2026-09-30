import React, { useState } from "react";
import axios from "axios";

function RiskPrediction() {
  const [machineId, setMachineId] = useState("");
  const [risk, setRisk] = useState("");

  const handlePredict = async () => {
    const res = await axios.get(`http://localhost:8080/predict/${machineId}`);
    setRisk(res.data.risk);
  };

  return (
    <div>
      <h2>Risk Prediction</h2>
      <input placeholder="Enter Machine ID" value={machineId} onChange={e => setMachineId(e.target.value)}/>
      <button onClick={handlePredict}>Predict</button>
      {risk && <h3>Risk Level: {risk}</h3>}
    </div>
  );
}

export default RiskPrediction;

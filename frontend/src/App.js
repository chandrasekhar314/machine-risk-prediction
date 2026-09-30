import React from "react";
import FieldConfig from "./FieldConfig";
import MachineRecords from "./MachineRecords";
import RiskPrediction from "./RiskPrediction";
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Machine Risk Prediction App</h1>
      <section>
        <FieldConfig />
      </section>
      <section>
        <MachineRecords />
      </section>
      <section>
        <RiskPrediction />
      </section>
    </div>
  );
}


export default App;

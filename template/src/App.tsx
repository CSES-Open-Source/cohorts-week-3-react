//TODO: 8  — Import useState and useEffect from React
import { useEffect, useState } from "react";
//TODO: 9  — Import Counter component from ./components/Counter
import Counter from "./components/Counter";
import { addCounter, loadCounters } from "./helpers/counter";
import "./App.css";

//TODO: 14  — Create CounterData interface for counters data
// interface CounterData {
//   name: string;
//   initial: number;
// }

function CounterList() {
  //TODO: 15  — Add counters state using useState<CounterData[]>([])
  //TODO: 16  — Add useEffect hook to load counters using loadCounters()

  // IGNORE UNTIL MENTIONED:
  //const [counterName, setCounterName] = useState<string>("");
  // const handleAddCounter = () => {
  //   if (!counterName.trim()) return;
  //   addCounter(counterName);
  //   setCounters((prev) => [...prev, { name: counterName, initial: 0 }]);
  // };

  return (
    <main>
      <h1>Counter App</h1>
      <div className="container">
        {/* TODO: 10  — Manually add one <Counter> component */}
        {/* TODO: 11  — Add a second <Counter> component with a different name and initial value */}
        {/* TODO: 17  — Replace manual Counters with .map() to render dynamically */}
      </div>

      {/* IGNORE UNTIL MENTIONED
       <div className="inputContainer">
        <input
          type="text"
          id="counterName"
          className="addInput"
          placeholder="New counter name"
          value={counterName}
          onChange={(e) => setCounterName(e.target.value)} // sync input with state
        />
        <button className="addButton" onClick={handleAddCounter}>
          Add Button
        </button>
      </div> */}
      {/* TODO: 18  — (Optional) Uncomment and connect input + button to addCounter() */}
    </main>
  );
}

export default CounterList;

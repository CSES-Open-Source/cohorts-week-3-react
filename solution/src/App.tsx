import { useEffect, useState } from "react";
import Counter from "./components/Counter";
import { addCounter, loadCounters } from "./helpers/counter";
import "./App.css";

interface CounterData {
  name: string;
  initial: number;
}

function CounterList() {
  const [counters, setCounters] = useState<CounterData[]>([]);
  const [counterName, setCounterName] = useState<string>("");
  useEffect(() => {
    loadCounters().then(setCounters);
  }, []);

  const handleAddCounter = () => {
    if (!counterName.trim()) return;
    addCounter(counterName);
    setCounters((prev) => [...prev, { name: counterName, initial: 0 }]);
  };

  return (
    <main>
      <h1>Counter App</h1>
      <div className="container">
        {counters.map((counter) => (
          <Counter name={counter.name} initial={counter.initial} />
        ))}
      </div>

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
      </div>
    </main>
  );
}

export default CounterList;

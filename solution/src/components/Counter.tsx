// Counter.tsx
import { useState } from "react";
import { updateCounter } from "../helpers/counter";
interface CounterProps {
  name: string;
  initial: number;
}

function Counter({ name, initial }: CounterProps) {
  const [count, setCount] = useState<number>(initial);

  const changeCount = (newCount: number) => {
    setCount(newCount);
    updateCounter(name, newCount); // update localStorage directly
  };

  return (
    <div className="counter">
      <h2>{name}</h2>
      <p id={`count-${name}`}>{count}</p>
      <div className="buttons">
        <button onClick={() => changeCount(count - 1)}>-</button>
        <button onClick={() => changeCount(0)}>Reset</button>
        <button onClick={() => changeCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default Counter;

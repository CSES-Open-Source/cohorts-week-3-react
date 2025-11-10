//
//TODO: 1  — Import useState from React
import { updateCounter } from "../helpers/counter";

//TODO: 2  — Create CounterProps interface with name and initial
// interface CounterProps {
//   name: string;
//   initial: number;
// }

//TODO: 3  — Add { name, initial }: CounterProps in function signature
function Counter() {
  // TODO: 4  — Add count variable and setCount function using useState(initial)

  // TODO: 12  — Create changeCount function that updates both state and localStorage (added later)

  return (
    <div className="counter">
      {/* TODO: 5  — Use the name variable in <h2> */}
      <h2>name</h2>
      {/* TODO: 6  — Use the count variable in <p> and add an id with count-${name} */}
      <p id={`count-${name}`}>0</p>
      {/* TODO: 7  — Add onClick functions using setCount for buttons (increment, decrement, reset) */}
      {/* TODO: 13  — Edit buttons to use changeCount instead of setCount (persistence) */}
      <div className="buttons">
        <button>-</button>
        <button>Reset</button>
        <button>+</button>
      </div>
    </div>
  );
}

export default Counter;

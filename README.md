Cohorts Week 3: React Counter App

First, create a fork and clone the project from Github:
```sh
git clone https://github.com/CSES-Open-Source/cohorts-week-3-react.git
```

# PREREQUISITES

## Node.js and npm
---

## Install Node.js (Required for Vite)

Before starting, make sure you have **Node.js v18+** installed.
You can check by running:

```bash
node -v
```

If you see something like `v20.11.1`, you’re ready to continue.
If not, follow the steps below based on your operating system.

---

### macOS Example.

1. **Install Node with Homebrew (recommended)**

   ```bash
   brew install node
   ```

2. **Verify installation**

   ```bash
   node -v
   npm -v
   ```

   You should now see version numbers for both Node and npm.

3. **(Alternative)**
   If you don’t use Homebrew, you can also download Node directly:

   * Go to [https://nodejs.org](https://nodejs.org)
   * Choose **LTS** → macOS Installer (`.pkg`)
   * Follow the on-screen setup wizard

---

### Windows Example

1. **Install Node using the official installer**

   * Visit [https://nodejs.org](https://nodejs.org)
   * Download the **LTS** version (`.msi` file)
   * Run the installer
   * Keep the default options checked — especially **“Add to PATH”**

2. **Verify installation**
   Open a new Command Prompt and run:

   ```bash
   node -v
   npm -v
   ```

   You should see version numbers appear.

3. **(Optional for advanced users)**
   You can also install via [Chocolatey](https://chocolatey.org/install):

   ```bash
   choco install nodejs-lts
   ```

---
## SETUP
### TODO 1: Create Vite Project
Navigate to the folder you created earlier with your name. Then run the following command in your terminal:

```
npm create vite@latest counter -- --template react-ts
```
This will create a new Vite project with React and TypeScript in a folder named `counter`.

Move into the folder and install dependencies:
```
cd counter
npm install
```

You should now see a structure like this:
```
counter/
├─ index.html
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ src/
   ├─ App.css
   ├─ App.tsx
   ├─ index.css
   └─ main.tsx
```
You can start the development server to verify everything is working:
```
npm run dev
```
---
### TODO 2: Replace Default Files
This might be overwhelming at first, but don't worry! We'll guide you through replacing the default files so that it's more manageable.

We’ll now copy over your prepared files from
root/template/part2/ into the new Vite project.

Make sure you’re still inside root/your-name/counter/, then run:
```
mkdir -p src
cp -r ../../template/* src/
```

This will copy the necessary files into your `src/` directory.

---

## React
### TODO 1: Import useState from React
In `Counter.tsx`, ensure that `useState` is imported from React at the top of the file:

```tsx
import { useState } from "react";
```

useState is a React Hook that allows you to add state management to your functional components.

---

Our goal is to create a `Counter` component that displays a count and has buttons to increment, decrement, and reset the count. It will take in two props: `name` (a string) and `initial` (a number).

This is what it will look like
```tsx
<Counter name="example" initial={0} />
``` 
### TODO 2: Implement Counter Props
In React, a prop (short for "property") is a way to pass data from a parent component to a child component. Props are read-only, meaning that a child component cannot modify the props it receives from its parent.

In `Counter.tsx`, define the props for the `Counter` component by creating an interface named `CounterProps`. This interface should include two properties: `name` of type `string` and `initial` of type `number`. Then, update the `Counter` function to accept these props.

```tsx
interface CounterProps {
    name: string;
    initial: number;
}
```
---
### TODO 3: Add CounterProps to Counter Component function signature
Update the `Counter` function to accept props of type `CounterProps`:

```tsx
function Counter({ name, initial }: CounterProps) {
}
```
This allows you to access the `name` and `initial` props directly within the component. Make sure the variable names match those defined in the `CounterProps` interface.

---

### TODO 4: Initialize State with useState
Inside the `Counter` component, use the `useState` hook to create a state variable named `count` and a function named `setCount` to update it. Initialize `count` with the value of the `initial` prop.

```tsx
const [count, setCount] = useState(initial);
```
This sets up a state variable `count` that starts with the value passed in through the `initial` prop.

---
### TODO 5: Display the name prop
For the <h2> tag inside the return statement of the `Counter` component, replace the placeholder text with the `name` prop to display the name of the counter.

```tsx
<h2>{name}</h2>
``` 
This will dynamically show the name of the counter based on the prop passed to the component.

---
### TODO 6: Display the count state
For the <p> tag inside the return statement of the `Counter` component, replace the placeholder text with the `count` state variable to display the current count. Also, add an `id` attribute to the <p> tag with the value `count-${name}`.

```tsx
<p id={`count-${name}`}>{count}</p>
```
This will dynamically show the current count and assign a unique ID based on the counter's name.

---
### TODO 7: Implement Button Functionality
Add `onClick` event handlers to the buttons inside the return statement of the `Counter` component to update the `count` state using the `setCount` function.

```tsx
<button onClick={() => setCount(count - 1)}>-</button>
<button onClick={() => setCount(0)}>Reset</button>
<button onClick={() => setCount(count + 1)}>+</button>
```
This will allow the buttons to decrement, reset, and increment the count when clicked.

---
### TODO 8: Import React Hooks (useState & useEffect) in App.tsx
In `App.tsx`, ensure that you import the `useState` and `useEffect` hooks from React at the top of the file:

```tsx
import { useEffect, useState } from "react";
```
This allows you to use the React hooks within the `App` component.

---
### TODO 9: Import Counter Component in App.tsx
In `App.tsx`, ensure that you import the `Counter` component from the `./
components/Counter` file at the top of the file:

```tsx
import Counter from "./components/Counter";
```
This allows you to use the `Counter` component within the `App` component.

---

### TODO 10: Add a Counter component inside App.tsx
In the `App` component, add a `Counter` component and pass the required props:

```tsx
function App() {
  return (
    <div>
      <Counter name="Counter 1" initial={0} />
    </div>
  );
}
```
This will render the `Counter` component with the specified `name` and `initial` props.

---
### TODO 11: Add another Counter with a different name
In the `App` component, add a second `Counter` component with a different `name` and `initial` value:

```tsx
<Counter "INSERT THE PROPER PROPERTIES HERE" />
```

---
### TODO 12: Create changeCount function
Inside the `Counter` component, create a new function named `changeCount` that takes a parameter `newCount` of type `number`. This function should update both the `count` state and call the `updateCounter` function to update localStorage.

```tsx
const changeCount = (newCount: number) => {
    setCount(newCount);
    updateCounter(name, newCount); // update localStorage directly
};
```
updateCounter is a helper function that is given to you in `helpers/counter.ts` that updates the counter value so that it persists even after a page refresh.

---
### TODO 13: Update Buttons to use changeCount
Modify the `onClick` event handlers of the buttons inside the return statement of the `Counter
component to use the `changeCount` function instead of `setCount`:

```tsx
<button onClick={() => changeCount(count - 1)}>-</button>
<button onClick={() => changeCount(0)}>Reset</button>
<button onClick={() => changeCount(count + 1)}>+</button>
```
This will ensure that both the state and storage are updated when the buttons are clicked so that the changes persist across page refreshes.

---
### TODO 14: Create CounterData Interface for Counters
In `App.tsx`, create an interface named `CounterData` that defines the structure for counter objects. This interface should include two properties: `name` of type `string` and `initial` of type `number`.

```tsx
interface CounterData {
    name: string;
    initial: number;
}
```
This interface will be used to type the counter data loaded from localStorage.

---
### TODO 15: Use State to Store Counters Array
In the `App` component, use the `useState` hook to create a state variable named `counters` that holds an array of `CounterData` objects. Initialize it with an empty array.

```tsx
const [counters, setCounters] = useState<CounterData[]>([]);
```
This sets up a state variable to manage the list of counters in the application.

---
### TODO 16: Load Counters from localStorage on Mount
In the `App` component, use the `useEffect` hook to load the counters from localStorage when the component mounts. Inside the `useEffect`, call the `loadCounters` function and update the `counters` state with the loaded data.

```tsx
useEffect(() => {
    const loadedCounters = loadCounters();
    setCounters(loadedCounters);
}, []);
```
useEffect is a React Hook that allows you to perform specific actions in components. By default, it runs after the first render and after every update. The empty array (`[]`) ensures it only runs once when the component mounts.

This will ensure that the counters are loaded from localStorage when the app starts.

---
### TODO 17: Render Counters Dynamically
In the `App` component, replace the existing `Counter` components with a dynamic rendering of `Counter` components based on the `counters` state. Use the `map` function to iterate over the `counters` array and render a `Counter` for each item.

```tsx
{counters.map((counter) => (
<Counter key={counter.name} name={counter.name} initial={counter.initial} />
))}
```
list.map() is a JavaScript array method that creates a new array by calling a provided function on every element in the calling array. In this case, it is used to generate a list of `Counter` components based on the data in the `counters` state.
This will render a `Counter` component for each counter object in the `counters` array.

---

### TODO 18: Add Functionality to Add New Counter
In the `App` component, uncomment the button that adds a new counter. Implement the `onClick` event handler to call the `addCounter` function with a unique name and an initial value of 0. After adding the new counter, update the `counters` state to include the newly added counter.

---
## Uploading Your Work
To upload your work to your GitHub repository, follow these steps:
### TODO 1: Add Changes
In your terminal, navigate to the root directory of your project (the `your-name` folder)
and run the following command to stage all your changes:
```
```bash
git add .
```

---
### TODO 2: Commit Changes
Next, commit your changes with a descriptive message:
```bash
git commit -m "Add new counter functionality"
```

---
### TODO 3: Push Changes
Finally, push your changes to your GitHub repository:
```bash
git push origin main
```

This will upload your committed changes to the `main` branch of your remote repository on GitHub.

---
# Congrats!
You have successfully completed the React Counter App project! 🎉


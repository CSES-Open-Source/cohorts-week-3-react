const STORAGE_KEY = "counters";

// Load all counters from localStorage, or from /counters.json if none saved
export async function loadCounters() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      console.error("Error parsing saved counters, falling back to JSON");
    }
  }

  // fetch and save if nothing in localStorage
  return fetch("/counters.json")
    .then((res) => {
      if (!res.ok) throw new Error("Failed to load counters.json");
      return res.json();
    })
    .then((data) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return data;
    })
    .catch((err) => {
      console.error("Error loading counters:", err);
      return [];
    });
}

// Update a specific counter and persist only that change
export function updateCounter(name: string, newCount: number) {
  const saved = localStorage.getItem("counters");
  let counters: { name: string; initial: number }[] = [];

  if (saved) {
    try {
      counters = JSON.parse(saved);
    } catch {
      console.error("Error parsing saved counters");
    }
  }

  // If the counter exists, update it; otherwise, add a new one
  const exists = counters.some((c) => c.name === name);
  const updated = exists
    ? counters.map((c) => (c.name === name ? { ...c, initial: newCount } : c))
    : [...counters, { name, initial: newCount }];

  localStorage.setItem("counters", JSON.stringify(updated));
}

// Add a new counter (default count = 0) and persist to localStorage
export function addCounter(name: string) {
  const saved = localStorage.getItem(STORAGE_KEY);
  let counters: { name: string; initial: number }[] = [];

  if (saved) {
    try {
      counters = JSON.parse(saved);
    } catch {
      console.error("Error parsing saved counters, resetting to empty array");
    }
  }

  // avoid duplicates
  if (counters.some((c) => c.name === name)) return;

  const newCounter = { name, initial: 0 };
  const updated = [...counters, newCounter];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

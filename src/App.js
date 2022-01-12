import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const remove = (id) => {
    const removeItem = people.filter((item) => item.id !== id);
    setPeople(removeItem);
  };
  if (people.length === 0) {
    return (
      <button className="btn-ref" onClick={() => setPeople(data)}>
        refresh
      </button>
    );
  }
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthDays Today</h3>
        <List people={people} remove={remove} />
        <button onClick={() => setPeople([])}>clear All</button>
      </section>
    </main>
  );
}

export default App;

import React from "react";

export default function HeavyComponent() {
  const items: JSX.Element[] = [];
  for (let i = 0; i < 2000; i++) {
    items.push(<li key={i}>Item {i}</li>);
  }

  // Simulate some complex rendering logic
  const complexMarkup: JSX.Element[] = [];
  for (let i = 0; i < 100; i++) {
    complexMarkup.push(<div key={i}>{items}</div>);
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Render the complex markup */}
      {complexMarkup}
    </div>
  );
}

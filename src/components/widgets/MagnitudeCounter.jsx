import { useState } from 'react';

function MagnitudeCounter({ events, initialValue = 4, step = 0.5, min = 0, max = 10 }) {
  const [threshold, setThreshold] = useState(initialValue);

  const matchingCount = events.filter((event) => event.properties.mag >= threshold).length;

  const handleIncrement = () => setThreshold((prev) => Math.min(prev + step, max));
  const handleDecrement = () => setThreshold((prev) => Math.max(prev - step, min));
  const handleReset = () => setThreshold(initialValue);

  return (
    <div className="counter">
      <div className="counter__controls">
        <button type="button" onClick={handleDecrement} disabled={threshold <= min}>−</button>
        <span className="counter__value">M ≥ {threshold.toFixed(1)}</span>
        <button type="button" onClick={handleIncrement} disabled={threshold >= max}>+</button>
      </div>
      <p className="counter__result">
        Подій з такою магнітудою: <strong>{matchingCount}</strong>
      </p>
      <button type="button" className="button--secondary" onClick={handleReset}>
        Скинути
      </button>
    </div>
  );
}

export default MagnitudeCounter;

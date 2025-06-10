import { useState } from 'react';

export default function RifleSelector() {
  const [selectedRifle, setSelectedRifle] = useState('hybrid');

  return (
    <div>
      <select
        className="w-full text-black border selector" 
        value={selectedRifle}
        onChange={(e) => setSelectedRifle(e.target.value)}>
        <option value="hybrid">The Hybrid</option>
        <option value="default_x">Project X</option>
        <option value="hunter_x">Project X Hunter</option>
        <option value="carbon_hunter_x">Project X Carbon Hunter</option>
      </select>
    </div>
  );
}

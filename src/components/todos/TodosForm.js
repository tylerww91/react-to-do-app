import React, { useState } from 'react';

export default function TodosForm() {
  const [desc, setDesc] = useState('');
  return (
    <div>
      <input
        type="text"
        placeholder="new todo"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button></button>
    </div>
  );
}

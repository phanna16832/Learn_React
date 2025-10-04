import React, { useState } from "react";

const ChangeEvent = () => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input value={name} onChange={handleNameChange} type="text" />
      <p>Name: {name}</p>
    </div>
  );
};

export default ChangeEvent;

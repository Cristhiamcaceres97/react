import React, { useState } from "react";

const StateComponent = () => {
  const [message, setMessage] = useState("");
  const handleClick = () => {
    setMessage("estado cambiado");
  };

  return (
    <div>
      <button onClick={handleClick}>Cambiar Estado</button>
      <p>{message}</p>
    </div>
  );
};

export default StateComponent;

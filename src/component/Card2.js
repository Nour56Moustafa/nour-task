import React from "react";
import { question2 } from "../utils/constants";
import { useTheContext } from "../context/context";

const Card2 = () => {
  const { qestion2_ans, handleRadio } = useTheContext();
  return (
    <div className="card card-2">
      <h1>السؤال الثاني:</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        {question2.map((qes) => (
          <div className="ans" key={qes.id}>
            <input
              value={qes.text}
              type="radio"
              checked={qestion2_ans === qes.text}
              onChange={(e) => handleRadio(e.target.value)}
            />
            <label htmlFor="">{qes.text}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Card2;

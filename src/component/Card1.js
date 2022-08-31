import React from "react";
import { useTheContext } from "../context/context";

const Card1 = ({ title, explain, maxWords, question1 }) => {
  const {
    question1_ans,
    justify,
    handleText,
    qestion1_ans_length,
    justify_length,
    checkValidation,
    qestion1_validation,
    justify_validation,
  } = useTheContext();

  const validation = question1 ? qestion1_validation : justify_validation;

  return (
    <div className="card card-1">
      <h1>{title}</h1>
      <p>{explain}</p>
      <span>إجابتك</span>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className={
            validation.touched && validation.isValid
              ? "border-success"
              : validation.touched && !validation.isValid
              ? "border-error "
              : ""
          }
          type="text"
          placeholder="اكتب هنا ..."
          name={question1 ? question1_ans : justify}
          value={question1 ? question1_ans : justify}
          onChange={(e) => handleText(question1, e.target.value)}
          onBlur={() => checkValidation(question1, maxWords)}
        />
      </form>
      <div className="card1-foot">
        <span>
          {question1 ? qestion1_ans_length : justify_length} / {maxWords}
        </span>
        {validation.err_msg && (
          <small className="error">{validation.err_msg}</small>
        )}
      </div>
    </div>
  );
};

export default Card1;

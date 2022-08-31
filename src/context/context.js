import React, { useReducer, useContext, useEffect } from "react";
import reducer from "../reducer/reducer";
import {
  START_TYPING,
  CALC_WORD_LENGTH,
  CHECK_QUES2,
  OPEN_SIDE,
  CLOSE_SIDE,
  START_VALIDATION,
} from "../action";

const initialState = {
  qestion1_ans: "",
  qestion2_ans: "",
  justify: "",
  qestion1_ans_length: 0,
  justify_length: 0,
  side_open: false,
  qestion1_validation: {
    touched: false,
    isValid: false,
    err_msg: "",
  },
  justify_validation: {
    touched: false,
    isValid: false,
    err_msg: "",
  },
};

const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: CALC_WORD_LENGTH });
    // eslint-disable-next-line
  }, [state.qestion1_ans || state.justify]);

  const handleText = (qestion1, text) => {
    dispatch({ type: START_TYPING, payload: { qestion1, text } });
  };

  const handleRadio = (value) => {
    dispatch({ type: CHECK_QUES2, payload: value });
  };

  const openSide = () => {
    dispatch({ type: OPEN_SIDE });
  };

  const closeSide = () => {
    dispatch({ type: CLOSE_SIDE });
  };

  const checkValidation = (qestion1, maxWords) => {
    dispatch({ type: START_VALIDATION, payload: { qestion1, maxWords } });
  };

  return (
    <Context.Provider
      value={{
        ...state,
        handleText,
        handleRadio,
        openSide,
        closeSide,
        checkValidation,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useTheContext = () => {
  return useContext(Context);
};

import {
  START_TYPING,
  CALC_WORD_LENGTH,
  CHECK_QUES2,
  OPEN_SIDE,
  CLOSE_SIDE,
  START_VALIDATION,
} from "../action";

const reducer = (state, action) => {
  if (action.type === START_TYPING) {
    const { qestion1, text } = action.payload;
    if (qestion1) {
      return { ...state, qestion1_ans: text };
    } else {
      return { ...state, justify: text };
    }
  }
  if (action.type === CALC_WORD_LENGTH) {
    let { qestion1_ans, justify, qestion1_ans_length, justify_length } = state;
    qestion1_ans_length = qestion1_ans
      ? qestion1_ans.trim().split(" ").length
      : 0;
    justify_length = justify ? justify.trim().split(" ").length : 0;
    return { ...state, qestion1_ans_length, justify_length };
  }
  if (action.type === CHECK_QUES2) {
    const value = action.payload;
    return { ...state, qestion2_ans: value };
  }
  if (action.type === OPEN_SIDE) {
    return { ...state, side_open: true };
  }
  if (action.type === CLOSE_SIDE) {
    return { ...state, side_open: false };
  }
  if (action.type === START_VALIDATION) {
    const { qestion1, maxWords } = action.payload;
    if (qestion1) {
      // qestion1 validation
      if (state.qestion1_ans_length <= 0) {
        return {
          ...state,
          qestion1_validation: {
            touched: true,
            isValid: false,
            err_msg: "مطلوب",
          },
        };
      } else if (state.qestion1_ans_length < maxWords) {
        return {
          ...state,
          qestion1_validation: {
            touched: true,
            isValid: false,
            err_msg: `يجب أن يكون على الأقل ${maxWords} كلمة`,
          },
        };
      } else {
        return {
          ...state,
          qestion1_validation: {
            touched: true,
            isValid: true,
            err_msg: "",
          },
        };
      }
    } else {
      // justify validation
      if (state.justify_length <= 0) {
        return {
          ...state,
          justify_validation: {
            touched: true,
            isValid: false,
            err_msg: "مطلوب",
          },
        };
      } else if (state.justify_length < maxWords) {
        return {
          ...state,
          justify_validation: {
            touched: true,
            isValid: false,
            err_msg: `يجب أن يكون على الأقل ${maxWords} كلمة`,
          },
        };
      } else if (state.justify_length > maxWords) {
        return {
          ...state,
          justify_validation: {
            touched: true,
            isValid: false,
            err_msg: `يجب أن يكون على الأكثر ${maxWords} كلمة`,
          },
        };
      } else {
        return {
          ...state,
          justify_validation: {
            touched: true,
            isValid: true,
            err_msg: "",
          },
        };
      }
    }
  }
};

export default reducer;

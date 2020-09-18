import produce from "immer";

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

export const increase = (input) => ({
  type: INCREASE,
  input,
});

export const decrease = (input) => ({
  type: DECREASE,
  input,
});

const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case INCREASE:
        draft.number = state.number + action.input;
        break;
      case DECREASE:
        draft.number = state.number - action.input;
        break;
      default:
        break;
    }
  });
}

export default counter;

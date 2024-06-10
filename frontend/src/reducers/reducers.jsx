/* eslint-disable react-refresh/only-export-components */
/**
 *
 * @param {*} state
 * @param {*} action
 * @returns
 */
export const paymentSessionReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SESSION":
      return { ...state, sid: action.sessionId };
    case "RESET_SESSION":
      return { ...state, sid: "" };
    default:
      return state;
  }
};

/**
 *
 * @param {*} state
 * @param {*} action
 * @returns
 */
export const patronReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PATRON":
      return { ...state, patronInfo: action.newPatron };
    case "REMOVE_PATRON":
      return { ...state, patronInfo: {} };
    default:
      return state;
  }
};

export const calculateGrandPrice = (state, action) => {
  switch (action.type) {
    case "CALC_GRAND_PRICE":
      return { ...state, grand: Number(action.total) };
    case "RESET_GRAND_PRICE":
      return { ...state, grand: 0.0 };
    default:
      return state;
  }
};

export const OrderItemsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEMS":
      return { ...state, items: action.items };
    case "REMOVE_ITEMS":
      return { ...state, items: {} };
    default:
      return state;
  }
};

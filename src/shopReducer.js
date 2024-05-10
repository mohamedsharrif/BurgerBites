export const initialState = {
  products: [],
  total: 0,
  cardNumber: "",
  expiryDate: "",
  cvv: "",
};

export const actionTypes = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    CALCULATE_TOTAL_PRICE: "CALCULATE_TOTAL_PRICE",
  };

const shopReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: payload.products,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: payload.products,
      };
    case "CALCULATE_TOTAL_PRICE":
      return {
        ...state,
        total: payload.total,
      };
    default:
      return state;
  }
};
export default shopReducer;

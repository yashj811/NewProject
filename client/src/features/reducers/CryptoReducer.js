import { CRYPTO_LOADING, GET_CRYPTO } from "../constants";

const initialState = {
  crypto: [],
  loading: true,
};

const CryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CRYPTO:
      return { crypto: [...action.payload], loading: false };
    case CRYPTO_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default CryptoReducer;

const initialState = {
  cards: [],
  loading: false,
  key: "AIzaSyCetm05J-yTyxATp0tXFoIu1eD1OimG2u0",
  errorParams: {
    title: "",
    isError: false,
  },
  errorLoad: {
    title: "",
    isError: false,
  },
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "books/load/start":
      return {
        ...state,
        loading: true,
        errorParams: {
          title: "",
          isError: false,
        },
        errorLoad: {
          title: "",
          isError: false,
        },
      };

    case "books/load/paramsError":
      return {
        ...state,
        loading: false,
        errorParams: {
          isError: true,
          title: action.payload,
        },
      };
    case "books/load/errorLoad":
      return {
        ...state,
        loading: false,
        errorLoad: {
          isError: true,
          title: action.payload,
        },
      };
    case "books/load/success":
      return {
        ...state,
        loading: false,
        cards: action.payload,
      };

    default:
      return state;
  }
};

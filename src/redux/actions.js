import axios from "axios";

export const loadingBooks = (query, maxResult, startIndex, KEY) => {
  return (dispatch) => {
    dispatch({ type: "books/load/start" });

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResult}&startIndex=${startIndex}&KEY=${KEY}`
      )
      .then((res) => {
        if (startIndex >= res.data.totalItems || startIndex < 1) {
          dispatch({
            type: "books/load/paramsError",
            payload: `max results must be between 1 and ${res.data.totalItems}`,
          });
        } else {
          if (res.data.items.length > 0) {
            dispatch({ type: "books/load/success", payload: res.data.items });
          }
        }
      })
      .catch((err) => {
        dispatch({
          type: "books/load/errorLoad",
          payload: err.response.data.error.message,
        });
      });
  };
};

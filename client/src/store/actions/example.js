// import API from "./../api/axios";
// import { GET_FOOD } from "./types";
// import store from "./../store";

// export const getFood = (idChild) => {
//   try {
//     API.get(`food/${idChild}`).then((response) =>
//       store.dispatch({
//         type: GET_FOOD,
//         payload: response.data,
//       })
//     );
//   } catch (err) {
//     const errors = err.response;

//     if (errors) {
//       console.log(errors);
//     }
//   }
// };

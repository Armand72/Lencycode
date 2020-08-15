// import { GET_MEDICATION, GET_ALLERGIES } from "../actions/types";

// const initialState = {
//   medication: [],
//   allergies: [],
// };

// export default function(state = initialState, action) {
//   const { type, payload } = action;

//   switch (type) {
//     case GET_MEDICATION:
//       const medication = payload;
//       return {
//         ...state,
//         medication: [...state.medication],
//         medication,
//       };
//     case GET_ALLERGIES:
//       const allergies = payload;
//       return {
//         ...state,
//         allergies: [...state.allergies],
//         allergies,
//       };
//     default:
//       return state;
//   }
// }

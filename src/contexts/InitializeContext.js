import React, { useState } from "react";

export const InitializeContext = React.createContext({
  done: false,
  setDone: () => {},
});

// export const InitializeContextProvider = ({ children }) => {
//   const setDone = (done) => {
//     setState({ ...state, done });
//   };

//   const initState = {
//     done: false,
//     setDone,
//   };

//   const [state, setState] = useState(initState);

//   return (
//     <InitializeContext.Provider value={state}>
//       {children}
//     </InitializeContext.Provider>
//   );
// };

import { useEffect, useReducer } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CartContextProvider from "./services/Cart/CartContext";

import { DashboardRoutes } from "./Router/DashboardRouter";
import { NewsLetterContext } from "./services/NewsLetter/Context";
import { Reducer } from "./services/NewsLetter/useReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { auth: false };
};
function App() {
  const [user, dispatch] = useReducer(Reducer, {}, init);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <NewsLetterContext.Provider value={{ user, dispatch }}>
      <CartContextProvider>
        <Router>
          <DashboardRoutes />
        </Router>
      </CartContextProvider>
    </NewsLetterContext.Provider>
  );
}

export default App;

import { useEffect, useReducer } from "react";
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
      <DashboardRoutes />
    </NewsLetterContext.Provider>
  );
}

export default App;

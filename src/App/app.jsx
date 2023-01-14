import "./styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Body } from "./components/Layout/layout";
import { Context } from "./context/AppContext";
import { useInitialState } from "./hooks/useInitialState";
import { Home } from "./pages/Home";

const App = () => {
  const initialState = useInitialState();
  return (
    <Context.Provider value={{ initialState }}>
      <Home />
    </Context.Provider>
  );
};

export default App;

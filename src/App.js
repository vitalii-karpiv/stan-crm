import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./routes/dashboard";
import Orders from "./routes/orders";
import Purchases from "./routes/purchases";
import Suppliers from "./routes/suppliers";
import Navbar from "./components/navbar";

function App() {
  return (
      <BrowserRouter>
          <div>
              <Navbar/>
              <Routes>
                  <Route element={<Dashboard/>} path={"/"} exact/>
                  <Route element={<Orders/>} path={"/orders"} exact/>
                  <Route element={<Purchases/>} path={"/purchases"} exact/>
                  <Route element={<Suppliers/>} path={"/suppliers"} exact/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;

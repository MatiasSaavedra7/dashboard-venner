import { Routes, Route } from "react-router-dom";

import News from "./News";
import Products from "./Products";
import Countries from "./Countries";
import Grapes from "./Grapes";
import Users from "./Users";

export default function Body() {
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<News/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/countries" element={<Countries/>} />
        <Route path="/grapes" element={<Grapes/>} />
        <Route path="/users" element={<Users/>} />
      </Routes>
    </div>
  );
}

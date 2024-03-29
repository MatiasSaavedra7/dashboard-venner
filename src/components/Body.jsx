import { Routes, Route } from "react-router-dom";

import News from "./News";
// import Products from "./Products";
import Countries from "./Countries";
import Grapes from "./Grapes";
import Users from "./Users";
import Test from "./Test";

export default function Body() {
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<News/>} />
        <Route path="/products" element={<Test/>} />
        <Route path="/countries" element={<Countries/>} />
        <Route path="/grapes" element={<Grapes/>} />
        <Route path="/users" element={<Users/>} />
      </Routes>
    </div>
  );
}

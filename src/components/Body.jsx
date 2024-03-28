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
        <Route path="/" Component={News} />
        <Route path="/products" Component={Products} />
        <Route path="/countries" Component={Countries} />
        <Route path="/grapes" Component={Grapes} />
        <Route path="/users" Component={Users} />
      </Routes>
    </div>
  );
}

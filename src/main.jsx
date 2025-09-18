import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/layout";
import UserLogin from "./components/userLogin";
import "./input.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/login" element={<UserLogin/>} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    <BrowserRouter />
  </StrictMode>
);

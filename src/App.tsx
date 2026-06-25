import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <Outlet />
    </BrowserRouter>
  );
};

export default App;

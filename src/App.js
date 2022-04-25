import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { Blogs } from "./Components/Blogs"
import { Dashboard } from "./Components/Dashboard";
import { Login } from "./Components/Login";
import { CreateAccount } from "./Components/CreateAccount";
import { NoPage } from "./Components/NoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Blogs />} />
            <Route path="secondPage" element={<Dashboard />} />
            <Route path="thirdPage" element={<Login />} />
            <Route path="fourthPage" element={<CreateAccount />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

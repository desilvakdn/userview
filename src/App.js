import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import UserList from "./components/userList";
import UserDetail from "./components/userDetail";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:userid" element={<UserDetail />} />
      </Routes>
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import UserProfile from "./components/Profile";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;

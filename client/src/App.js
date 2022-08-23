import SinglePost from "./components/singlePost/SinglePost";
import TopBar from "./components/topbar/TopBar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const user = false;

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route
          exact
          path="/register"
          element={user ? <Homepage /> : <Register />}
        />
        <Route exact path="/login" element={user ? <Homepage /> : <Login />} />
        <Route exact path="/write" element={user ? <Write /> : <Register />} />
        <Route
          exact
          path="/settings"
          element={user ? <Settings /> : <Register />}
        />
        <Route exact path="/post/:postId" element={<SinglePost />} />
      </Routes>
    </Router>
  );
}

export default App;

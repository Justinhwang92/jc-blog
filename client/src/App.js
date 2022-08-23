import SinglePost from "./components/singlePost/SinglePost";
import TopBar from "./components/topbar/TopBar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
function App() {
  return (
    <>
      <TopBar />
      {/* <Homepage /> */}
      {/* <Write /> */}
      {/* <Settings /> */}
      {/* <Login /> */}
      <Register />
    </>
  );
}

export default App;

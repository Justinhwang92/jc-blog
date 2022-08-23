import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./homepage.css";

export default function Homepage() {
  return (
    <>
      <Header />
      <div className="home">
        {/* <Posts /> */}
        <SinglePost />
        <Sidebar />
      </div>
    </>
  );
}

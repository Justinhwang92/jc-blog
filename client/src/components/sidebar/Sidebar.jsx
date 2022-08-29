import "./sidebar.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // fetch tags from server
    const getTags = async () => {
      const res = await axios.get("/tags");
      setTags(res.data);
    };
    getTags();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        {/* About me */}
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="http://localhost:4000/images/home.jpg" alt="" />
        <p>
          Full Stack Developer | GMU ’22 | JavaScript, TypeScript, MongoDB,
          ExpressJS, ReactJS, Node JS
        </p>
      </div>
      <div className="sidebarItem">
        {/* Tags */}
        <span className="sidebarTitle">TAGS</span>
        <ul className="sidebarList">
          {tags.map((tag) => (
            <Link to={`/?tag=${tag.name}`} className="link" key={tag._id}>
              <span className="sidebarListItem">{tag.name}</span>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        {/* Social media */}
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}

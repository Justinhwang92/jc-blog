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
        <img
          src="https://images.unsplash.com/photo-1657567718275-9a2d95760e76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt=""
        />
        <p>about me description placeholder</p>
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

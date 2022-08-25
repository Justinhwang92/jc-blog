import "./singlePost.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2]; // post id
  const [post, setPost] = useState({});

  useEffect(() => {
    // fetch a single post from server
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      {/* Photo */}
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={post.photo} alt="" />
        )}
        {/* Title */}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          {/* Author */}
          <span>
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b className="singlePostAuthor">{post.username}</b>
            </Link>
          </span>
          {/* Date */}
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>
        {/* Description */}
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
}

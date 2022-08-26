import "./singlePost.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2]; // post id
  const [post, setPost] = useState({});
  const PF = "http://localhost:4000/images/";
  const { user } = useContext(Context);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  // fetch a single post from server
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  // delete the post from server
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  // update the post on the server
  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      // window.location.reload();
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      {/* Photo */}
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={PF + post.photo} alt="" />
        )}
        {/* Title */}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {/* Edit buttons */}
            {post.username === user?.username && (
              <div
                className="singlePostEdit"
                onClick={() => setUpdateMode(true)}
              >
                <i className="singlePostIcon far fa-edit"></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

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
        {updateMode ? (
          <>
            <textarea
              className="singlePostDescInput"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <button className="singlePostButton" onClick={handleUpdate}>
              Update
            </button>
          </>
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
      </div>
    </div>
  );
}

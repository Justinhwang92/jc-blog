import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:4000/images/";

  return (
    <div className="post">
      {/* Image */}
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        {/* Categories */}
        <div className="postCats">
          {post.categories.map((cat) => (
            <span className="postCat">{cat.name}</span>
          ))}
        </div>
        {/* Title */}
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>{" "}
        </Link>

        <hr />
        {/* Date */}
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      {/* Description */}
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}

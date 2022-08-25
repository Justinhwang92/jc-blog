import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <div className="post">
      {/* Image */}
      {post.photo && <img className="postImg" src={post.photo} alt="" />}
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

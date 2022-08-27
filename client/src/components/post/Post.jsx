import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:4000/images/";

  return (
    <div className="post">
      {/* Image */}
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        {/* Tags */}
        <div className="postCats">
          {post.tags.map((tag) => (
            <Link to={`/?tag=${tag.name}`} className="link" key={tag._id}>
              <span className="postCat">{tag.name}</span>
            </Link>
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

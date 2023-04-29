import { format, formatISO9075 } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

//{format(new Date(createdAt),'MMM d, yyyy HH:mm')}
function Post({ _id,title, summary, content, cover, createdAt, author }) {
  return (
    <div>
      <div className="post">
        <div className="image">
          <Link to={`/post/${_id}`}>
            <img src={"http://localhost:4000/" + cover} alt="Franklin" />
          </Link>
        </div>

        <div className="texts">
          <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
          </Link>
          <p className="info">
            <span className="author">{author.username}</span>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;

import React from "react";
import { formatDate } from "../utils/format_date";
import "./post.css";

const Post = ({ author, title, image_url, body, created_at }) => {
  return (
    <div className="forum-post">
      <div className="post-header">
        <img className="avatar" src={author.avatar_url} alt={author.name} />
        <div className="post-author">{author.name}</div>
        <span className="post-at">post on {formatDate(created_at)}</span>
      </div>
      <div className="post-content-wrapper ">
        <div>
          <img className="post-image" src={image_url} alt={title} />
        </div>
        <div>
          <div className="post-title">{title}</div>
          <div className="post-content">{body}</div>
        </div>
      </div>
    </div>
  );
};

export default Post;

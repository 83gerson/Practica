import React from "react";

const AuthorCard = ({ author }) => (
  <div class="card w-80">
    <img src={author.download_url} class="card-img-top" alt={author.author} />
    <div class="card-body">
      <h5 class="card-title">{author.author}</h5>
    </div>
  </div>
);

export default AuthorCard;

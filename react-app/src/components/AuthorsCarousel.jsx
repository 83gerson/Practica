import React from "react";

const AuthorsCarousel = ({ authors, setCurrentAuthor }) => {
  const carouselItems = authors.map((author) => (
    <div
      key={author.id}
      className="carousel-item active"
      data-bs-interval="10000"
      onClick={() => setCurrentAuthor(author)}
    >
      <img src={author.download_url} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>{author.author}</h5>
      </div>
    </div>
  ));

  return (
    <div id="carouselExampleDark" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">{carouselItems}</div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default AuthorsCarousel;

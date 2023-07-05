import { useEffect, useState } from "react";
import AuthorsCarousel from "./components/AuthorsCarousel";
import AuthorCard from "./components/AuthorCard";

function App() {
  const [authors, setAuthors] = useState([]);
  const [currentAuthor, setCurrentAuthor] = useState({});

  const fetchAuthors = async () => {
    const response = await fetch(
      "https://run.mocky.io/v3/1f9412fd-43ba-4b7e-b519-dfe5b97065bc"
    );
    const fetchedAuthors = await response.json();
    setAuthors(fetchedAuthors);
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  const carouselAuthors = authors.length >= 5 ? authors.slice(0, 3) : [];

  return (
    <div className="container">
      <AuthorsCarousel
        authors={carouselAuthors}
        setCurrentAuthor={setCurrentAuthor}
      />
      <br />
      <h1>Autor seleccionado:</h1>
      <br />
      <AuthorCard author={currentAuthor} />
    </div>
  );
}

export default App;

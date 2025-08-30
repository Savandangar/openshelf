import { useState,useEffect } from "react";
import SearchBar from "./components/SearchBar";
import BookGrid from "./components/BookGrid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const keywords = ["the", "love", "life", "adventure", "history", "science"];
    const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];

    searchBooks(randomKeyword);
  }, []);

  async function searchBooks(q) {
    if (!q) {
      toast.error(`Please enter a search term`);
      setBooks([]);
      return;
    }
    setQuery(q);
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(q)}&limit=24`
      );
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();

      if (!data.docs || data.docs.length === 0) {
        toast.info(`No results found for “${q}”`);
      }
      setBooks(data.docs || []);
    } catch (err) {
      toast.error(`Something went wrong: ${err.message}`);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  }


  return (
    <>
      <nav className="navbar navbar-dark bg-primary mb-4">
        <div className="container">
          <a className="navbar-brand" href="#">
            📚 Book Finder
          </a>
        </div>
      </nav>

      <main className="container">
        <div
          className="mx-auto"
          style={{ maxWidth: "33%", minWidth: "300px" }}
        >
          <h1 className="mb-4 text-center">Find Your Next Read</h1>
          <p className="text-center text-muted">
            Search for books using the OpenLibrary API.
          </p>
          <SearchBar onSearch={searchBooks} />
        </div>
        {loading && (
          <div className="text-center my-4">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {!loading && !error && <BookGrid books={books} query={query} />}
      </main>

      <ToastContainer position="top-right" autoClose={3000} />

    </>
  );
}

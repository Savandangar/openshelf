import BookCard from "./BookCard";

export default function BookGrid({ books, query }) {
  if (!query) return <p className="text-muted text-center">Enter a title to start searching.</p>;
  if (books.length === 0) return <p className="text-muted text-center">No results.</p>;

  return (
    <div className="row">
      {books.map((b) => {
        const key = b.key || b.cover_edition_key || `${b.title}_${b.first_publish_year}`;
        return (
          <div className="col-6 col-md-4 col-lg-3 mb-4" key={key}>
            <BookCard book={b} />
          </div>
        );
      })}
    </div>
  );
}

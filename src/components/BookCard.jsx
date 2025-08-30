function coverUrl(book) {
  if (book.cover_i) return `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
  if (book.isbn && book.isbn[0]) return `https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`;
  return `https://placehold.co/800?text=${book.title}&font=roboto`;
}

export default function BookCard({ book }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={coverUrl(book)}
        className="card-img-top"
        alt={book.title}
        style={{ height: 300, objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{book.title}</h6>
        <p className="card-text text-muted mb-1">
          {book.author_name ? book.author_name.join(", ") : "Unknown author"}
        </p>
        <p className="card-text mb-2">
          <small className="text-muted">First published: {book.first_publish_year || "—"}</small>
        </p>
        <a
          className="btn btn-outline-primary mt-auto"
          href={`https://openlibrary.org${book.key}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on OpenLibrary
        </a>
      </div>
    </div>
  );
}

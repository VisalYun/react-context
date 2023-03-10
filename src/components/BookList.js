import BookShow from "./BookShow";

const BookList = ({books, onDelete, onEdit}) => {
    const renderBooks = books.map(book => <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />)
    
    return <div className="book-list">
        {renderBooks}
    </div>
}

export default BookList;
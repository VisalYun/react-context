import {useState} from "react";
import BookEdit from "./BookEdit";

const BookShow = ({book, onDelete, onEdit}) => {
    const [isEditing, setIsEditing] = useState(false)

    const handleDeleteBook = () => {
        onDelete(book.id)
    }

    const handleEditBook = () => {
        setIsEditing(!isEditing)
    }

    const handleSubmit = (id, title) => {
        setIsEditing(false)
        onEdit(id, title)
    }

    let content = <h3>{book.title}</h3>
    if(isEditing){
        content = <BookEdit book={book} onSubmit={handleSubmit} />
    }

    return <div className="book-show">
        <img alt={book.title} src={`https://picsum.photos/seed/${book.id}/300/200`} />
        {content}
        <div className="actions">
            <button className="edit" onClick={handleEditBook}>
                Edit
            </button>
            <button className="delete" onClick={handleDeleteBook}>
                Delete
            </button>
        </div>
    </div>
}

export default BookShow;
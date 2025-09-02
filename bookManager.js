const Book = require('./book');

class BookManager {
    constructor() {
        this.books = [];
    }
    
    addBook(book) {
        if (!(book instanceof Book)) {
            throw new Error("Parameter must be a Book instance");
        }
        this.books.push(book);
    }
    
    removeBook(title) {
        if (!title || typeof title !== 'string' || title.trim() === '') {
            throw new Error("Title cannot be empty or null");
        }
        
        const titleLower = title.trim().toLowerCase();
        const initialCount = this.books.length;
        this.books = this.books.filter(book => 
            book.title.toLowerCase() !== titleLower
        );
        return this.books.length < initialCount;
    }
    
    getAllBooks() {
        return [...this.books]; // Return a copy
    }
    
    findBooksByAuthor(author) {
        if (!author || typeof author !== 'string' || author.trim() === '') {
            throw new Error("Author cannot be empty or null");
        }
        
        const authorLower = author.trim().toLowerCase();
        return this.books.filter(book => 
            book.author.toLowerCase() === authorLower
        );
    }
    
    findBooksByYear(year) {
        if (!year || typeof year !== 'number' || year <= 0) {
            throw new Error("Year must be a positive number");
        }
        
        return this.books.filter(book => book.year === year);
    }
    
    getBookCount() {
        return this.books.length;
    }
    
    containsBook(title) {
        if (!title || typeof title !== 'string' || title.trim() === '') {
            throw new Error("Title cannot be empty or null");
        }
        
        const titleLower = title.trim().toLowerCase();
        return this.books.some(book => 
            book.title.toLowerCase() === titleLower
        );
    }
    
    clearAllBooks() {
        this.books = [];
    }
}

module.exports = BookManager;
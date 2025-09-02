class Book {
    constructor(title, author, year) {
        if (!title || typeof title !== 'string' || title.trim() === '') {
            throw new Error("Title cannot be empty or null");
        }
        if (!author || typeof author !== 'string' || author.trim() === '') {
            throw new Error("Author cannot be empty or null");
        }
        if (!year || typeof year !== 'number' || year <= 0) {
            throw new Error("Year must be a positive number");
        }
        
        this.title = title.trim();
        this.author = author.trim();
        this.year = year;
    }
    
    toString() {
        return `"${this.title}" by ${this.author} (${this.year})`;
    }
    
    equals(other) {
        if (!(other instanceof Book)) {
            return false;
        }
        return this.title === other.title && 
               this.author === other.author && 
               this.year === other.year;
    }
}

module.exports = Book;

const Book = require('../book');
const BookManager = require('../bookManager');

describe('BookManager', () => {
    let manager;
    
    beforeEach(() => {
        manager = new BookManager();
    });
    
    test('should add a book', () => {
        const book = new Book("Test Book", "Test Author", 2023);
        manager.addBook(book);
        expect(manager.getBookCount()).toBe(1);
    });
    
    test('should remove an existing book', () => {
        const book = new Book("Dark Disk", "Collapse", 2021);
        manager.addBook(book);
        
        const removed = manager.removeBook("Dark Disk");
        expect(removed).toBe(true);
        expect(manager.getBookCount()).toBe(0);
    });
    
    test('should return false when removing non-existent book', () => {
        const removed = manager.removeBook("Non-existent Book");
        expect(removed).toBe(false);
    });
    
    test('should find books by author', () => {
        const book1 = new Book("Book 1", "Author A", 2020);
        const book2 = new Book("Book 2", "Author B", 2021);
        const book3 = new Book("Book 3", "Author A", 2022);
        
        manager.addBook(book1);
        manager.addBook(book2);
        manager.addBook(book3);
        
        const authorABooks = manager.findBooksByAuthor("Author A");
        expect(authorABooks.length).toBe(2);
        
        const authorBBooks = manager.findBooksByAuthor("Author B");
        expect(authorBBooks.length).toBe(1);
    });
    
    test('should find books by year', () => {
        const book1 = new Book("Book 1", "Author A", 2020);
        const book2 = new Book("Book 2", "Author B", 2021);
        const book3 = new Book("Book 3", "Author C", 2020);
        
        manager.addBook(book1);
        manager.addBook(book2);
        manager.addBook(book3);
        
        const books2020 = manager.findBooksByYear(2020);
        expect(books2020.length).toBe(2);
        
        const books2021 = manager.findBooksByYear(2021);
        expect(books2021.length).toBe(1);
    });
    
    test('should check if book exists', () => {
        const book = new Book("Existing Book", "Author", 2020);
        manager.addBook(book);
        
        expect(manager.containsBook("Existing Book")).toBe(true);
        expect(manager.containsBook("Non-existing Book")).toBe(false);
    });
    
    test('should clear all books', () => {
        const book1 = new Book("Book 1", "Author A", 2020);
        const book2 = new Book("Book 2", "Author B", 2021);
        
        manager.addBook(book1);
        manager.addBook(book2);
        
        expect(manager.getBookCount()).toBe(2);
        manager.clearAllBooks();
        expect(manager.getBookCount()).toBe(0);
    });
    
    test('should throw error when adding non-Book object', () => {
        expect(() => {
            manager.addBook({});
        }).toThrow("Parameter must be a Book instance");
    });
    
    test('should throw error when removing with empty title', () => {
        expect(() => {
            manager.removeBook("");
        }).toThrow("Title cannot be empty or null");
    });
});
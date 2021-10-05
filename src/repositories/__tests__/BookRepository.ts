import { BookRepository } from '../BookRepository';

describe('book repository', () => {
  it('should be able to fetch all books', async () => {
    const books = BookRepository.all();
    expect(books).not.toEqual([]);
  });

  it('should be able to fetch one book', async () => {
    const book = BookRepository.find(1);
    expect(book).toBeDefined();
    expect(book.id).toBe(1);
  });

  it('should be able to throw exception if book not found', async () => {
    try {
      BookRepository.find(9999);
    } catch (error) {
      expect(error).toHaveProperty('message', 'Not found book ID 9999.');
    }
  });
});

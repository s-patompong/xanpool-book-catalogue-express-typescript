import books from './../../database/books.json';
import Book from '../interfaces/Book';
import { HttpException } from '../exceptions/HttpException';

export class BookRepository {
  public static all(): Book[] {
    return books;
  }

  public static find(id: number): Book {
    const book = books.find((book: Book) => book.id === id);

    if (!book) {
      throw new HttpException(404, `Not found book ID ${id}.`);
    }

    return book;
  }
}

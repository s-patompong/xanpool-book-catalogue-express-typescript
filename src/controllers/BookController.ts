import { Request, Response } from 'express';
import { BookRepository } from '../repositories/BookRepository';
import { HttpException } from '../exceptions/HttpException';

export class BookController {
  public static index(req: Request, res: Response): void {
    res.json(BookRepository.all());
  }

  public static show(req: Request, res: Response): void {
    const bookId = parseInt(req.params.id);

    if (isNaN(bookId)) {
      throw new HttpException(400, `Book ID must be a number.`);
    }

    res.json(BookRepository.find(bookId));
  }
}

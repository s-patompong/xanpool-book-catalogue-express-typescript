import express, { Router } from 'express';
import { BookController } from '../controllers/BookController';

export const booksRouter: Router = express.Router();

/* GET books listing. */
booksRouter.get('/', BookController.index);

/* GET specific book by ID. */
booksRouter.get('/:id', BookController.show);

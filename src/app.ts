import dotenv from 'dotenv';
import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import { indexRouter } from './routes';
import { booksRouter } from './routes/books';
import { PageNotFound } from './middlewares/PageNotFound';
import { ErrorHandler } from './middlewares/ErrorHandler';

dotenv.config();

const app: Application = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', indexRouter);
app.use('/books', booksRouter);

// Run any other routes through the PageNotFound middleware and send it along the error handler
app.use(PageNotFound);
app.use(ErrorHandler);

export default app;

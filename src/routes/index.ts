import express, { Router } from 'express';
import { HomeController } from '../controllers/HomeController';

export const indexRouter: Router = express.Router();

/* GET home page. */
indexRouter.get('/', HomeController.index);

import { Request, Response } from 'express';

export class HomeController {
  public static index(req: Request, res: Response): void {
    res.json({
      message: 'The API is working.',
    });
  }
}

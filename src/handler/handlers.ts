import { Request, Response } from "express";

const indexHandler = (req: Request, res: Response) => {
  res.render("index.njk", {
    title: "Hello World",
    message: "Hello World",
  });
};

export { indexHandler };

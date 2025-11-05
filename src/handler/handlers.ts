import { Request, Response } from "express";

const indexHandler = (req: Request, res: Response) => {
  res.render("forms/inputform.njk", {
    title: "Hello World",
    message: "Hello World",
  });
};

const htmxTestHandler = (req: Request, res: Response): void => {
  const { name, message } = req.body;

  console.log(name, message);
  // Simulate API delay with timeout (3 seconds)
  setTimeout(() => {
    res.send(`${name} ${message}`);
  }, 3000);
};
export { indexHandler, htmxTestHandler };

import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { createMessage, readDeleteMessage } from "../db/db";

const indexHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);

  if (!id) return res.render("forms/inputform.njk");

  try {
    const { message, name } = await readDeleteMessage(id);

    res.render("forms/readMessage.njk", {
      name,
      message,
    });
  } catch (error) {
    res.status(404).render("replies/notAvailable.njk");
  }
};

const htmxTestHandler = async (req: Request, res: Response): Promise<void> => {
  const { name, message } = req.body;

  if (!name || !message) res.status(400);

  const id = uuidv4();

  try {
    await createMessage({ name, message, id });
    res.status(201).render("replies/success.njk", { id });
  } catch (error) {}
};
export { indexHandler, htmxTestHandler };

import path from "node:path";
import { promises as fs } from "node:fs";

interface MessageProps {
  name: string;
  message: string;
  id: string;
}

const MESSAGE_DIR = path.resolve("messages");

const ensureMessageDir = async (): Promise<void> => {
  await fs.mkdir(MESSAGE_DIR, { recursive: true });
};

const createMessage = async ({
  name,
  message,
  id,
}: MessageProps): Promise<void> => {
  try {
    await ensureMessageDir();

    const filePath = path.join(MESSAGE_DIR, `${id}.json`);
    const data = JSON.stringify({ id, name, message });

    await fs.writeFile(filePath, data, "utf8");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const readDeleteMessage = async (id: string): Promise<MessageProps> => {
  try {
    const sanitizedId = id.replace(/`/g, "");
    const filePath = path.join(MESSAGE_DIR, `${sanitizedId}.json`);
    const message = await fs.readFile(filePath, "utf8");
    fs.rm(filePath);
    return JSON.parse(message);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { createMessage, readDeleteMessage };

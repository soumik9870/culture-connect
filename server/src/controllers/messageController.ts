import Message from '../models/Message';
import { Request, Response } from 'express';

export const createMessage = async (req: Request, res: Response) => {
  try {
    const message = await Message.create(req.body);
    res.status(201).json(message);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
};

export const getMessages = async (_req: Request, res: Response) => {
  try {
    const messages = await Message.find().populate('sender').populate('receiver');
    res.json(messages);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
};

export const getMessageById = async (req: Request, res: Response) => {
  const message = await Message.findById(req.params.id);
  message ? res.json(message) : res.status(404).json({ message: 'Message not found' });
};

export const deleteMessage = async (req: Request, res: Response) => {
  const message = await Message.findByIdAndDelete(req.params.id);
  message ? res.json({ message: 'Message deleted' }) : res.status(404).json({ message: 'Message not found' });
};

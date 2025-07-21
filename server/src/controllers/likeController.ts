import Like from '../models/Likes';
import { Request, Response } from 'express';

export const createLike = async (req: Request, res: Response) => {
  try {
    const like = new Like(req.body);
    const savedLike = await like.save();
    res.status(201).json(savedLike);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    res.status(400).json({ error: errorMessage });
  }
};

export const getLikes = async (req: Request, res: Response) => {
  try {
    const likes = await Like.find().populate('user');
    res.json(likes);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
};

export const deleteLike = async (req: Request, res: Response) => {
  try {
    const like = await Like.findByIdAndDelete(req.params.id);
    if (!like) return res.status(404).json({ error: 'Like not found' });
    res.json({ message: 'Like removed' });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
};

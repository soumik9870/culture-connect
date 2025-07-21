import Comment from '../models/Comment';
import { Request, Response } from 'express';

export const createComment = async (req: Request, res: Response) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ message: 'Error creating comment', error: err });
  }
};

export const getComments = async (req: Request, res: Response) => {
  try {
    const comments = await Comment.find().populate('author');
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching comments', error: err });
  }
};

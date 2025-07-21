import Tag from '../models/Tag';
import { Request, Response } from 'express';

export const createTag = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const tag = new Tag({ name, description });
    await tag.save();
    res.status(201).json(tag);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create tag', error });
  }
};

export const getAllTags = async (req: Request, res: Response) => {
  try {
    const tags = await Tag.find();
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch tags', error });
  }
};

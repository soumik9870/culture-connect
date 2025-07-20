import Contribution from '../models/Contribution';
import { Request, Response } from 'express';

export const createContribution = async (req: Request, res: Response) => {
  try {
    const contribution = await Contribution.create(req.body);
    res.status(201).json(contribution);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
};

export const getContributions = async (_req: Request, res: Response) => {
  try {
    const contributions = await Contribution.find().populate('user_id').populate('culture_id');
    res.json(contributions);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
};

export const getContributionById = async (req: Request, res: Response) => {
  const contribution = await Contribution.findById(req.params.id);
  contribution ? res.json(contribution) : res.status(404).json({ message: 'Contribution not found' });
};

export const updateContribution = async (req: Request, res: Response) => {
  const contribution = await Contribution.findByIdAndUpdate(req.params.id, req.body, { new: true });
  contribution ? res.json(contribution) : res.status(404).json({ message: 'Contribution not found' });
};

export const deleteContribution = async (req: Request, res: Response) => {
  const contribution = await Contribution.findByIdAndDelete(req.params.id);
  contribution ? res.json({ message: 'Contribution deleted' }) : res.status(404).json({ message: 'Contribution not found' });
};

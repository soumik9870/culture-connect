import Event from '../models/Event';
import { Request, Response } from 'express';

export const createEvent = async (req: Request, res: Response) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
};

export const getEvents = async (_req: Request, res: Response) => {
  try {
    const events = await Event.find().populate('created_by');
    res.json(events);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
};

export const getEventById = async (req: Request, res: Response) => {
  const event = await Event.findById(req.params.id);
  event ? res.json(event) : res.status(404).json({ message: 'Event not found' });
};

export const updateEvent = async (req: Request, res: Response) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  event ? res.json(event) : res.status(404).json({ message: 'Event not found' });
};

export const deleteEvent = async (req: Request, res: Response) => {
  const event = await Event.findByIdAndDelete(req.params.id);
  event ? res.json({ message: 'Event deleted' }) : res.status(404).json({ message: 'Event not found' });
};

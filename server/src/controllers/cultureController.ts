
import Culture from "../models/culture";
import { Request, Response } from 'express';

export const createCulture = async (req: Request, res: Response) => {
    try {
        const culture = await Culture.create(req.body);
        res.status(201).json(culture);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

export const getCultures = async (_req: Request, res: Response) => {
    try {
        const cultures = await Culture.find().populate('submitted_by');
        res.json(cultures);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

export const getCultureById = async (req: Request, res: Response) => {
    const culture = await Culture.findById(req.params.id);
    culture ? res.json(culture) : res.status(404).json({ message: "Culture not found" });
};

export const updateCulture = async (req: Request, res: Response) => {
    const culture = await Culture.findByIdAndUpdate(req.params.id, req.body, { new: true });
    culture ? res.json(culture) : res.status(404).json({ message: "Culture not found" });
}

export const deleteCulture = async (req: Request, res: Response) => {
    const culture = await Culture.findByIdAndDelete(req.params.id);
    culture ? res.json({ message: "Culture deleted" }) : res.status(404).json({ message: "Culture not found" });
}
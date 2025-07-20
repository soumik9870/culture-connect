import User from '../models/user';
import { Request, Response } from 'express';

export const createUser = async (req: Request, res: Response) => {
    try{
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

export const getUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

export const getUserById = async (req: Request, res: Response) => {
    const user = await User.findById(req.params.id);
    user ? res.json(user) : res.status(404).json({ message: "User not found"});
}

export const updateUser = async (req: Request, res: Response) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    user ? res.json(user) : res.status(404).json({ message: "User not found" });
}

export const deleteUser = async (req: Request, res: Response) => {
    const user = await User.findByIdAndDelete(req.params.id);
    user ? res.json({ message: "User deleted" }) : res.status(404).json({ message: "User not found" });
};
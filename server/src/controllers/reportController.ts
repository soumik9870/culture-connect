import Report from '../models/Report';
import { Request, Response } from 'express';

export const createReport = async (req: Request, res: Response) => {
  try {
    const { reportedBy, targetType, targetId, reason } = req.body;
    const report = await Report.create({ reportedBy, targetType, targetId, reason });
    res.status(201).json(report);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    res.status(400).json({ error: errorMessage });
  }
};

export const getAllReports = async (req: Request, res: Response) => {
  try {
    const reports = await Report.find().populate('reportedBy');
    res.json(reports);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
};

export const updateReportStatus = async (req: Request, res: Response) => {
  try {
    const report = await Report.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(report);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
};

export const deleteReport = async (req: Request, res: Response) => {
  try {
    await Report.findByIdAndDelete(req.params.id);
    res.json({ message: 'Report deleted' });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
};

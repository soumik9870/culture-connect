import mongoose from "mongoose";

const ContributionSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    culture_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Culture' },
    type: { type: String, enum: ['text', 'image', 'video'], required: true },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
    content_url: { type: String },
    description: { type: String },
    date: { type: Date, default: Date.now },
});

export default mongoose.model('Contribution', ContributionSchema);
import mongoose from "mongoose";

const CultureSchema = new mongoose.Schema({
    title: { type: String, required: true},
    country: { type: String, required: true},
    description: {type: String, required: true},
    image: {type: String},
    submitted_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    created_at: {type: Date, default: Date.now}
});

export default mongoose.model('Culture', CultureSchema);
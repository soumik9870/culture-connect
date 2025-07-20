import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    title: {type: String, required: true},
    date: {type: Date, required: true},
    location: {type: String, required: true},
    description: {type: String },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
    culture_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Culture'},
    created_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    created_at: {type: Date, default: Date.now}
});

export default mongoose.model('Event', EventSchema);
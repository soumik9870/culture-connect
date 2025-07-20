import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
    sender: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    receiver:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    message: {type: String, required: true},
    sent_at: {type: Date, default: Date.now }, 
});

export default mongoose.model('Message', MessageSchema);
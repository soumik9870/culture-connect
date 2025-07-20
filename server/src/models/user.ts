import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, unique: true, required: true},
    password: {type: String, required: true},
    role: {type: String, enum: ['Explorer', 'Contributor', 'Admin'], default: 'Explorer'},
    joined_on: { type: Date, default: Date.now },
});

export default mongoose.model('User', UserSchema);
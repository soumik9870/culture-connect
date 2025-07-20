import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, unique: true, required: true},
    password: {type: String, required: true},
    role: {type: String, enum: ['Explorer', 'Contributor', 'Admin'], default: 'Explorer'},
    joined_on: { type: Date, default: Date.now },
});

UserSchema.pre('save', async function(this: any, next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

UserSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
}

export default mongoose.model('User', UserSchema);
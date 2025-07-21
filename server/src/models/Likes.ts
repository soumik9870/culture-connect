import mongoose from 'mongoose';

const LikeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  targetType: {
    type: String,
    enum: ['Culture', 'Contribution', 'Event', 'Message'],
    required: true,
  },
  targetId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'targetType',
  },
  likedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Like', LikeSchema);

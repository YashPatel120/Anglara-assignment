import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: String,
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null },
  status: { type: String, default: 'active' }
});

export default mongoose.model('Category', categorySchema);

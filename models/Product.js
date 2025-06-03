import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Tên sản phẩm là bắt buộc'],
  },
  description: {
    type: String,
    required: [true, 'Mô tả sản phẩm là bắt buộc'],
  },
  price: {
    type: Number,
    required: [true, 'Giá sản phẩm là bắt buộc'],
  },
  image: {
    type: String, // URL ảnh
    default: '',  // hoặc có thể để null
  },
}, {
  timestamps: true // Tự động tạo createdAt và updatedAt
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
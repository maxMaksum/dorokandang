import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    rm: { type: String, required: true },
    nama: { type: String, required:true },
    namakk: { type: String, required: false },
    alamat: { type: String, required: false },
    rt: { type: Number, required: false },
    rw: { type: String, required: false }
  },
  {
    timestamps: true,
  }
);

const Customers = mongoose.models.Customers || mongoose.model('Customers', userSchema);
export default Customers;
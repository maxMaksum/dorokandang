import mongoose, { Schema } from 'mongoose';

const customerSchema = new Schema(
  {
    rm: { type: String, required: true},
    nama: { type: String, required: false },
    namakk: { type: String, required: false},
    alamat: { type: String, required: false },
    rt: { type: String, required: false},
    rw: { type: String, required: false},

  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.models.Customer || mongoose.model('Customer', customerSchema);
export default Customer;
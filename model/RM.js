import mongoose, { Schema } from 'mongoose';

const customerSchema = new mongoose.Schema(
  {
    _id:{ type: Schema.Types.ObjectId, auto:true},
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

const Cusomer = mongoose.models.Cusomer || mongoose.model('Cusomer', customerSchema);
export default Cusomer;
import mongoose, { Schema } from 'mongoose';

const clientSchema = new mongoose.Schema(
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

const Client = mongoose.models.Client || mongoose.model('Client', clientSchema);
export default Client;
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleId: { type: String },
  name: { type: String },
  gender: { type: String },
  image: { type: String },
  email: { type: String },
  country: { type: String },
  address: { type: String },
  state: { type: String },
  zip: { type: String },
  cell_phone: { type: String }
});

mongoose.model('User', UserSchema);

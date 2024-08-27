import mongoose, { Model, Schema, model } from 'mongoose';

export interface IUsers {
  name: string;
  email: string;
  image: string;
  emailVerified: boolean | null;
  primaryCurrency: Schema.Types.ObjectId;
}

const UsersSchema = new Schema<IUsers>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: String,
    emailVerified: Boolean,
    primaryCurrency: {
      type: Schema.Types.ObjectId,
      ref: 'currencies',
      required: true,
    },
  },
  { timestamps: true }
);

export const Users =
  (mongoose.models.users as Model<IUsers>) ||
  mongoose.model<IUsers>('users', UsersSchema);

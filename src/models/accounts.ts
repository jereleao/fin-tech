import { Model, Schema, model } from 'mongoose';

export interface IAccount {
  name: string;
  userId: Schema.Types.ObjectId;
  currentRatio: number;
}

const AccountSchema = new Schema<IAccount>({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
});

export const Accounts =
  (mongoose.models.accounts as Model<IAccount>) ||
  model<IAccount>('accounts', AccountSchema);

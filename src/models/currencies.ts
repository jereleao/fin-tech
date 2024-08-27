import { Model, Schema, model } from 'mongoose';

export interface ICurrency {
  currencyCode: string;
  userId: Schema.Types.ObjectId;
  currentRatio: number;
}

const CurrencySchema = new Schema<ICurrency>(
  {
    currencyCode: {
      type: String,
      required: true,
      max: 3,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    currentRatio: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Currencies =
  (mongoose.models.currencies as Model<ICurrency>) ||
  model<ICurrency>('currencies', CurrencySchema);

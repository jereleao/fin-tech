import { Model, Schema, model } from 'mongoose';

export interface ITransaction {
  originalValue: number;
  currencyId: Schema.Types.ObjectId;
  finalValue: number;
  operationId: Schema.Types.ObjectId;
  transactionDate: Date;
  fromAccountId: Schema.Types.ObjectId;
  toAccountId: Schema.Types.ObjectId;
}

const TransactionSchema = new Schema<ITransaction>(
  {
    originalValue: {
      type: Number,
      required: true,
    },
    currencyId: {
      type: Schema.Types.ObjectId,
      ref: 'currencies',
      required: true,
    },
    finalValue: {
      type: Number,
      required: true,
    },
    operationId: {
      type: Schema.Types.ObjectId,
      ref: 'operations',
      required: true,
    },
    transactionDate: {
      type: Date,
      required: true,
    },
    fromAccountId: {
      type: Schema.Types.ObjectId,
      ref: 'accounts',
      required: true,
    },
    toAccountId: {
      type: Schema.Types.ObjectId,
      ref: 'accounts',
      required: true,
    },
  },
  { timestamps: true }
);

export const Transactions =
  (mongoose.models.transactions as Model<ITransaction>) ||
  model<ITransaction>('transactions', TransactionSchema);

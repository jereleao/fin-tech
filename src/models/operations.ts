import { Model, Schema, model } from 'mongoose';

export interface IOperation {
  description: string;
  categoryId: Schema.Types.ObjectId;
  isForecast: boolean;
  createdBy: Schema.Types.ObjectId;
}

const OperationSchema = new Schema<IOperation>(
  {
    description: {
      type: String,
      required: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: 'categories',
      required: true,
    },
    isForecast: {
      type: Boolean,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
  },
  { timestamps: true }
);

export const Operations =
  (mongoose.models.operations as Model<IOperation>) ||
  model<IOperation>('operations', OperationSchema);

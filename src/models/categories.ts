import { Model, Schema, model } from 'mongoose';

export interface ICategory {
  name: string;
  userId: Schema.Types.ObjectId;
  groupId?: Schema.Types.ObjectId;
}

const CategorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  groupId: {
    type: Schema.Types.ObjectId,
    ref: 'category-groups',
  },
});

export const Categories =
  (mongoose.models.categories as Model<ICategory>) ||
  model<ICategory>('categories', CategorySchema);

import { model, Schema, Document } from "mongoose";

export interface IMenu extends Document {
  title: string;
  items: [{ name: string; mount: string; ingredients: [string] }];
}

const ItemSchema = new Schema();

const MenuSchema = new Schema({
  title: {
    type: String,
  },
  items: {
    type: Array,
    required: true,
  },
});

export default model<IMenu>("Menu", MenuSchema);

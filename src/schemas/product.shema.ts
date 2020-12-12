import { from } from "rxjs";
import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    imageURL: String,
    price: Number,
    createDate: {
        type: Date,
        default: Date.now
    }
});

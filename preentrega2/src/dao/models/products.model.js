import { Schema, model } from 'mongoose'
import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const productsSchema = new Schema({
    title: String,
    description:String,
    price: Number,
    stock:Number,
    category:String,
    quantity: {
        type: Number,
        default: 1
    },
    isActive: {
        type: Boolean,
        default: true,
    }

})

productsSchema.plugin(mongoosePaginate)

export default model('products', productsSchema)
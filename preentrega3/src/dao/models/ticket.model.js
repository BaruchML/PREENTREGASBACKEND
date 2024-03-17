import { Schema,model } from "mongoose";

const collection = 'ticket'

const ticketScheema = new Schema({

    code:{
        type:String,
        auto:true,
        default:true
    },
    purchase_date:{
        type:Date,
        default:Date.now
    },
    amount: {
        type:Number,
        required:true},
    purchaser:{
        type: Schema.Types.ObjectId,
        ref: 'users'
 
    }
    
})
ticketScheema.pre('findOne', function(){
    this.populate('users.user')
})

export default model(collection,ticketScheema)
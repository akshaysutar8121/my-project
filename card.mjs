import mongoose from 'mongoose'

const cardScema=mongoose.Schema({
    name:String,
    url:String
})

export default mongoose.model('users',cardScema)
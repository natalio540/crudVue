import mongoose from 'mongoose'
const schema = mongoose.Schema


const stockSchema = new schema({
    name:{type:String,  required:[true,'nombre obligatorio']},
    cantidad: Number,
    comments: [{ type: String, date: Date }],
    date: { type: Date, default: Date.now },
})

// esto hay que convertirlo en un modelo
const stockLibreria = mongoose.model ( 'StockModel', stockSchema);

export default stockLibreria;
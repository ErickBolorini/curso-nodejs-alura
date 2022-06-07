import mongoose from "mongoose"

mongoose.connect("mongodb+srv://alura:123@alura.7qi59.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.connection;

export default db;
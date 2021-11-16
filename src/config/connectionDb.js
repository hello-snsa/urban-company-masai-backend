require("dotenv").config();
const mongoose = require('mongoose');

const connect = () => {


    const dbUrl = process.env.NODE_ENV === "development" ? "mongodb://127.0.0.1:27017/urabanClone" : "mongodb+srv://urbanadmin:Urban##pass12@cluster0.r35kx.mongodb.net/urbanclone?retryWrites=true&w=majority"

    return mongoose.connect(dbUrl, {
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

}
module.exports = connect;
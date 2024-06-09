const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

const connectDb = async () => {
    await mongoose.connect(uri, {
        dbName: "Recipe_hub",
    }).then(c => console.log(`DB connected to ${c.connection.host}`))
        .catch(e => console.log(e));
};

module.exports = connectDb;
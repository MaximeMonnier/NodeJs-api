const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://maxime:operation39@cluster0.dljjy7f.mongodb.net/api-node",
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if (!err) console.log("Mongodb connected");
        else console.log("Connection error :" + err);
    }
)
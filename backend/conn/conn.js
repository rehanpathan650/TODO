const mongoose = require("mongoose");

const conn = async (req,res) => {
try {
    await mongoose.connect("mongodb+srv://rehankhan491786:OAl7USoC1ooyQKUY@cluster0.lqh0ac2.mongodb.net/").then(() => {
        console.log("connected");
    });
}
catch (error) {
     console.log(error);
   }
};
conn();

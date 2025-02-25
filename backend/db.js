const mongoose = require("mongoose");
const mongoURI = 'mongodb+srv://nikhiladwani3:jCMDmlEKRyJA5FlA@cluster0.jhnhg.mongodb.net/foodhubmern?retryWrites=true&w=majority&appName=Cluster0'

const mongoDB = async () =>{
       try {await mongoose.connect(mongoURI)
            console.log("connected");
            const fetched_data = mongoose.connection.db.collection("food_items");
            const data = await fetched_data.find({}).toArray()
                const foodCategory = mongoose.connection.db.collection("food_category")
                const catData = await foodCategory.find({}).toArray()
                        global.food_items = data;
                        global.categoryData = catData;
        }
        catch(err){
            console.log("MongoDB connection Error", err);
        }
};

module.exports = mongoDB;
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        amount: Number,
        category: String,
        description: String,
        currencySymbol: String
    }
)
const UserModel = mongoose.model("expense-tracker", userSchema)
module.exports = UserModel
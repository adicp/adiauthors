const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    AuthorsName: { 
        type: String,
        required: [true,"Name is required"],
        minlength:[3, "Please enter an author name longer than 3 characters"]
        
    }
}, { timestamps: true });
module.exports = mongoose.model('Author', PersonSchema);
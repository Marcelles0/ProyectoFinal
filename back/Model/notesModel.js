const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    /* userId: {
        type: String,
        required: true
    }, */
    date:{
        type: Date,
        default: Date.now
    }
},
{
    versionKey:false,
});

module.exports = mongoose.model('notes',notesSchema);
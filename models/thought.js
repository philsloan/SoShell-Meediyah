//thoughtText
    //string
    //required
    // Must be between 1 and 280 characters
//createAt
    //Date
    //Set default value to the current timestamp
    // use a getter method to format the timestamp on query
//username(the user that created this thought)
    //string
    //required
//reactions(these are like replies)
    //array of nested documents created with the reactionSchema
//Schema Settings
//Create a virtual called reactionCount that retrives the lenth 
// of the thoughts reactions array field on query

const { Schema, model } = require('mongoose');
const formatDate = require('../utils/format.js'); // REMEMBER THIS <<<<<<<<<<< 
const Reaction = require('./reactions.js'); // AND THIS <<<<<<<<

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => formatDate(date)
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [Reaction],
},
 {
    toJSON: {
        getters: true,
        virtuals: true,   // and this one <<<<<<<<<<
    },
    id: false
 }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    })

    const Thought = model('thought', thoughtSchema);
    module.exports = Thought;
//username
    //string
    //unique
    //required
    //trimmed
//email
    //string
    //required
    //unique
    //Must match a valid email address(look into Mongoose;s matching validation)
//thoughts
    //array of _id values referencing the Thought mdoel
//friends
    //Array of _id values referencing the User model (self-reference)

// Schema Setting 
    //Creat a vitrtual called FriendCount that retrieves the length of the users friends array fiels on query

const { Schema, Types } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Enter a valid email address please..']
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'thought',
    }, ],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'friend',
    }, ],
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
    })

const User = model('user', userSchema);
module.exports = User;
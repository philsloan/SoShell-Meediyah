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
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
//Create a virtual called reactionCount that retrives the lenth of the thoughts reactions array field on query
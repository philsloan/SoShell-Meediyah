//(SCHEMA ONLY)
    //reactionId 
        //use mongoose's ObjectID data type
        //Default value is set to a new objectId
    //reactionBody
        //string
        //Requiree
        //280 character maximum
    //username
        //string
        //required
    //createaAt
        //Date
        //set default value to the current timestamp
        //Use a getter method to format the timestamp on query
//Schema Settings
    //This will not be a model, but rather will be used as the reaction fields subdocument 
    //schema in the thought model
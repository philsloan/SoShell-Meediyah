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

    const { Schema, Types } = require('mongoose');
    const formatDate = require('../utils/format.js')
    const reactionSchema = new Schema(
      {
        reactionId: {
          type: Schema.Types.ObjectId,
          default: () => new Types.ObjectId(),
        },
        reactionBody: {
          type: String,
          required: true,
          maxlength: 280,
        },
        username: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: (date) => formatDate(date)
        },
      },
      {
        toJSON: {
          getters: true,
        },
        id: false,
      }
    );
    
    module.exports = reactionSchema;
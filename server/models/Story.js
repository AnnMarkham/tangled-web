const { Schema, model } = require('mongoose');


const storySchema = new Schema(
  {     
    storyTitle: {
        type: String, 
        required: 'Please add a Title'
    },
    storyText: {
      type: String,
    },
    username: {
      type: String,
    },
    //add setting, character etc.
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Story = model('Story', storySchema);

module.exports = Story;

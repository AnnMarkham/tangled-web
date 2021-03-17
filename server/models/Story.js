const { Schema, model } = require('mongoose');


const storySchema = new Schema(
  {     
    storyTitle: {
        type: String, 
        required: 'Please add a Title'
    },
    storyText: {
      type: String,
      required: 'You need to leave a thought!',
      minlength: 1,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
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

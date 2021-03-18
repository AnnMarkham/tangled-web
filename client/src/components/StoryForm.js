import React, {useState} from 'react';
import { Form, Button} from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_STORY } from '../utils/mutations';
import { QUERY_STORIES, QUERY_ME } from '../utils/queries';


const StoryForm = () => {
    //set initial form state
    const [storyFormData, setStoryFormData] = useState({ storyTitle: '', storyText: ''});

    const [addStory] = useMutation(ADD_STORY, {
  
    // update story array's cache
    
    update(cache, { data: { addStory } }) {
      // could potentially not exist yet, so wrap in a try/catch
      try {
        //read what is currently in the cache

        const { stories } = cache.readQuery({ query: QUERY_STORIES });
        cache.writeQuery({
          query: QUERY_STORIES,
          data: { stories: [addStory, ...stories] }
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      //prepend the newest story to the front of the array
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, stories: [...me.stories, addStory] } }
      });
    }
  });

  // update state based on form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStoryFormData({ ...storyFormData, [name]: value });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();
    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

     await addStory({
        variables: { ...storyFormData },
    });

    setStoryFormData({
        storyTitle: '',
        storyText: '',
      });
  };
  return (

      <Form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}>

        <Form.Group>
            <Form.Label htmlFor= "storyTitle"> Title</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter Story Title Here (required)."
            name='storyTitle'
            onChange={handleInputChange}
            value={storyFormData.storyTitle}
            required/>
            <Form.Control.Feedback type='invalid'>Title is required.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
            <Form.Label htmlFor= "storyText"> Story Text</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Write your story here."
            name='storyText'
            onChange={handleInputChange}
            value={storyFormData.storyText}
            required/>
            </Form.Group>
            <Button
          disabled={!(storyFormData.storyTitle && storyFormData.storyText)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>

  );
  };

export default StoryForm;
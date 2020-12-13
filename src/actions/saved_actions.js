const BASE_URL = 'http://localhost:3000'
const SAVED_URL = `${BASE_URL}/saveds`
const ADD_TO_SAVED = 'ADD_TO_SAVED'


export const addToSaved = (post, user) =>  dispatch => {
    // console.log(post, user)
  
    const saved = {
      user_id: user.id,
      post_id: post.id}
  
    const reqObj = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }, 
      body: JSON.stringify(saved)
      }
      fetch(SAVED_URL, reqObj)
      .then(res => res.json())
      .then(saved => 
        dispatch({
        type: ADD_TO_SAVED,
        saved
      })
      )
  }
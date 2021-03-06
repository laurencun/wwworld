import API from '../API.js'

const POST_URL = `${API}/posts`

export const postToEdit = (post) => dispatch => {

    fetch(`${POST_URL}/${post.id}`)
    .then(res => res.json())
    .then(post  => 
        dispatch({
        type: 'POST_TO_EDIT',
        post
    })
    )
}

export const revert = (post) => {
    return {type: 'REVERT', post}
}
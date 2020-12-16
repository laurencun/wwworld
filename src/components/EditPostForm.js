import React, { Component } from 'react'
import { connect } from 'react-redux';
import {updatePost} from '../actions/post_actions'
import {revert} from '../actions/post_to_edit.actions'

class EditPostForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.post_to_edit.id,
            image: this.props.post_to_edit.image, 
            location: this.props.post_to_edit.location,
            caption: this.props.post_to_edit.caption
        }
    }

    componentDidUpdate(prevProps, prevState){
        if (this.props.todoToEdit && prevState.image === '') {
            this.setState({
                id: this.props.post_to_edit.id,
                image: this.props.post_to_edit.image, 
                location: this.props.post_to_edit.location,
                caption: this.props.post_to_edit.caption
            })
        }
    }

    handleChange = (event) => {
        this.setState({
            id: this.props.post_to_edit.id,
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.updatePost(this.state)
        this.props.revert(this.state)
        this.setState({
            id: '',
            image: '', 
            location: '',
            caption: ''
        })
    }

    render() {

        console.log(this.props.post_to_edit)

        return (
            <div style={{margin: '10vh'}}>
                <div style={{padding:50, align: 'center'}}>
                    <h2>Edit Post</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input style={{padding:5}} onChange={this.handleChange} name='image' type='text' placeholder="Image" value={this.state.image}/><br/>
                        <input style={{padding:5}} onChange={this.handleChange} name='location' type='text' placeholder="Location" value={this.state.location}/><br/>
                        <input style={{padding:5}} onChange={this.handleChange} name='caption' type='text' placeholder="Caption" value={this.state.caption}/><br/>
                        <input style={{margin:10}} type='submit' value='submit' />
                    </form>
                </div>
                </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts,
    auth: state.auth,
    post_to_edit: state.post_to_edit
})

export default connect(mapStateToProps, {updatePost, revert})(EditPostForm)
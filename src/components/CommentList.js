import React from 'react';
import './ImageList.css';
import {deletePost} from './../actions';
import {connect} from 'react-redux'
import uuid from 'react-uuid'

const CommentList=(props)=>{
    let deletePosts = (id)=>{
        props.deletePost(id,props.comments.id)
    }
    let generateList=({comments})=>{
        return comments.map((el,i)=>{
            return (<li key={uuid()}>{el} <span onClick={()=>deletePosts(i)} className="close">X</span></li>)
        })
    }
    
    return (<ol>
        {generateList(props.comments)}
      </ol>)
}

export default connect(null,{deletePost})(CommentList);
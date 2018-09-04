import React from 'react';
import Comment from './CommentContainer';

const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;
/*const CommentsList = ({ comments = [] }) => {
    console.log('moj comments ma wartosc')
    console.log(comments)
    
    return <span>bly bly</span>
    }*/

export default CommentsList;
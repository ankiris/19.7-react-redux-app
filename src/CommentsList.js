import React from 'react';
import Comment from './CommentContainer';

const CommentsList = ({comments}) => 
    <div>
        <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;
    </div>
export default CommentsList;
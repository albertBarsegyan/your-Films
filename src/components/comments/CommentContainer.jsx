import React from 'react'
import CommentItem from './CommentItem';
import CommonButton from '../CommonButton';
import { Input } from '@material-ui/core';

export default function CommentContainer({ commentList, onSubmit, onClick }) {
  return (
    <div>
      <div className="text-center my-5">
        <span className="text-gray-600 text-2xl">Comments</span>
      </div>
      <form onSubmit={onSubmit}>
        <div className="flex items-center justify-center w-full gap-3">
          <div className="w-3/4">
            <Input
              name="comment"
              fullWidth={true}
              placeholder="Type your comment"
            />
          </div>
          <div>
            <CommonButton type="submit" buttonInnerText="Add comment" />
          </div>
        </div>
      </form>

      <ul>
        {commentList.length > 0 ? (
          commentList.map((commentObject) => (
            <CommentItem
              key={commentObject.id}
              commentEmail={commentObject.commentWriter}
              comment={commentObject.comment}
              onClick={() => onClick(commentObject.id)}
            />
          ))
        ) : (
          <div className="text-center my-5">
            <span className="text-4xl">There is no comments yet</span>
          </div>
        )}
      </ul>
    </div>
  );
}

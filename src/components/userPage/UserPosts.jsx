import React, { Component } from 'react';
import CommonButton from '../CommonButton';
import PostTemplate from './PostTemplate';

export default class UserPosts extends Component {
  render() {
    const { onClick, postList, onBlur, deletePost, onChange } = this.props;
    return (
      <div>
        <div className="items-center justify-center flex">
          <CommonButton buttonInnerText="Add post" onClick={onClick} />
        </div>
        <ul>
          {postList.length > 0
            ? postList.map((postObject) => {
                return (
                  <PostTemplate
                    value={postObject.postValue}
                    key={postObject.id}
                    onChange={(e) => onChange(e, postObject.id, 'postList')}
                    onBlur={(e) => onBlur(e, postObject.id, 'postList')}
                    deletePost={() => deletePost(postObject.id, 'postList')}
                    showComments={() => {
                      'ola';
                    }}
                  />
                );
              })
            : null}
        </ul>
      </div>
    );
  }
}

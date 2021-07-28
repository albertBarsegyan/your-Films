import React, { Component } from 'react';
import Header from '../Header';
import LogOut from './LogOut';
import UserInfo from './UserInfo';
import PostTemplate from './PostTemplate';
import handleBlurPost from '../../handlers/handleBlurPost';
import PopUp from '../PopUp';
import UserPosts from './UserPosts';
import handlePostAdd from '../../handlers/handlePostAdd';
import handleDelete from '../../handlers/handleDelete';
import CommonButton from '../CommonButton';
import Link from 'next/link';
import getPostComments from '../../helpers/getPostComments';
import handleAddComment from '../../handlers/handleAddComment';
import handleDeleteComment from '../../handlers/handleDeleteComment';

export default class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      showPopup: false,
    };
    this.handleBlurPost = handleBlurPost.bind(this);
    this.handlePostAdd = handlePostAdd.bind(this);
    this.handleDelete = handleDelete.bind(this);
    this.getPostComments = getPostComments.bind(this);
    this.handleAddComment = handleAddComment.bind(this);
    this.handleDeleteComment = handleDeleteComment.bind(this);
  }
  componentDidMount() {
    if (process.browser) {
      //   console.log('browser process');
      let userEmail = JSON.parse(localStorage.getItem('loggedUser')).email;
      //   // current email posts list
      let userPostList = localStorage.getItem('usersPosts')
        ? JSON.parse(localStorage.getItem('usersPosts')).find(
            (userPostObject) => userPostObject[userEmail]
          )
        : undefined;

      if (userPostList) {
        this.setState((prevState) => {
          return {
            postList: [...prevState.postList, ...userPostList[userEmail]],
          };
        });
        return;
      }

      //   // current state post list
      const userPostObject = { [userEmail]: this.state.postList };
      const localUsersPostData =
        JSON.parse(localStorage.getItem('usersPosts')) ?? [];
      localUsersPostData.push(userPostObject);
      localStorage.setItem('usersPosts', JSON.stringify(localUsersPostData));
      // }
    }
  }

  render() {
    const { firstName, lastName } = this.props;
    const { postList } = this.state;
    return (
      <div>
        {this.state.showPopup ? (
          <PopUp isError={false} popUpMessage="Post Saved" />
        ) : null}
        <Header>
          <Link href="/registeredUsers" passHref>
            <CommonButton buttonInnerText="Users" />
          </Link>
          <LogOut />
        </Header>
        <UserInfo firstName={firstName} lastName={lastName} />
        <UserPosts onClick={() => this.handlePostAdd('postList')}>
          {postList.length > 0
            ? postList.map((postObject) => {
                return (
                  <PostTemplate
                    value={postObject.postValue}
                    key={postObject.id}
                    commentList={postObject.comments}
                    onChange={(e) =>
                      this.handleBlurPost(e, postObject.id, 'postList')
                    }
                    onBlur={(e) =>
                      this.handleBlurPost(e, postObject.id, 'postList')
                    }
                    deletePost={() =>
                      this.handleDelete(postObject.id, 'postList')
                    }
                    handleAddComment={(e) =>
                      this.handleAddComment(e, postObject.id, 'postList')
                    }
                    handleDeleteComment={(commentId)=> this.handleDeleteComment(commentId,postObject.id,'postList')}
                  />
                );
              })
            : null}
        </UserPosts>
      </div>
    );
  }
}

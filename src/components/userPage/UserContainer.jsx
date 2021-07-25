import React, { Component } from 'react';
import Header from '../Header';
import LogOut from './LogOut';
import UserInfo from './UserInfo';

import handleBlurPost from '../../helpers/handleBlurPost';
import PopUp from '../PopUp';
import UserPosts from './UserPosts';
import handlePostAdd from '../../helpers/handlePostAdd';
import handleDelete from '../../helpers/handleDelete';
// import handleOnchange from '../../helpers/handleOnchange';

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
    // this.handleOnchange = handleOnchange.bind(this);
  }
  componentDidMount() {
    const userEmail = JSON.parse(localStorage.getItem('loggedUser')).email;

    let userPostList;
    if (localStorage.getItem('usersPosts')) {
      userPostList = JSON.parse(localStorage.getItem('usersPosts')).find(
        (userPostObject) => userPostObject[userEmail]
      );
    }
    this.setState(() => {
      return { postList: [...userPostList[userEmail]] };
    });
  }
  componentDidUpdate(prevProps, prevState) {}

  render() {
    const { firstName, lastName } = this.props;
    return (
      <div>
        {this.state.showPopup ? (
          <PopUp isError={false} popUpMessage="Post Saved" />
        ) : null}
        <Header>
          <LogOut />
        </Header>
        <UserInfo firstName={firstName} lastName={lastName} />
        <UserPosts
          onChange={this.handleBlurPost}
          onClick={() => this.handlePostAdd('postList')}
          postList={this.state.postList}
          deletePost={this.handleDelete}
          onBlur={this.handleBlurPost}
        />
      </div>
    );
  }
}

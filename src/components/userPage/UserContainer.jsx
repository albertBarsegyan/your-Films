import React, { Component } from 'react';
import CommonButton from '../CommonButton';
import Header from '../Header';
import LogOut from './LogOut';
import UserInfo from './UserInfo';
import PostTemplate from './PostTemplate';
import handleBlurPost from '../../helpers/handleBlurPost';
import PopUp from '../PopUp';
export default class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      postList: [],
    };
    this.handleBlurPost = handleBlurPost.bind(this);
  }
  componentDidMount() {
    const userObject = JSON.parse(localStorage.getItem('loggedUser'));
    this.setState({ userData: userObject });
  }
  componentDidUpdate(prevProps, prevState) {
    if (String(prevState.postList) !== String(this.state.postList)) {
      console.log(this.state.postList);
    }
  }
  componentWillUnmount() {
    localStorage.setItem('loggedUser', JSON.stringify({}));
  }

  render() {
    const { userData } = this.state;
    return (
      <div>
        <Header>
          <LogOut />
        </Header>
        <UserInfo firstName={userData.firstName} lastName={userData.lastName} />
        <div className="items-center justify-center flex">
          <CommonButton
            buttonInnerText="Add post"
            onClick={(e) => {
              console.log('handle post');
            }}
          />
        </div>
        <PostTemplate
          onBlur={(e) => {
            this.handleBlurPost(e, 'postList');
          }}
        />
      </div>
    );
  }
}

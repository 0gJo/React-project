import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PostPresenter from './PostPresenter';
const PostContainer = (
    {  
        id,
        user,
        files,
        likeCount,
        isLiked,
        comments,
        createdAt
    }
) => {
    return <PostPresenter/>
}

//컴포넌트 속성으로 전달된 데이터의 데이터타입을 정해준다

PostContainer.ProTypes = {
    id: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      username: PropTypes.string.isRequired
    }).isRequired,
    files: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    ).isRequired,
    likeCount: PropTypes.number.isRequired,
    isLiked: PropTypes.bool.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        user: PropTypes.shape({
          id: PropTypes.string.isRequired,
          username: PropTypes.string.isRequired
        }).isRequired
      })
    ).isRequired,
    createdAt: PropTypes.string
  };

export default PostContainer;
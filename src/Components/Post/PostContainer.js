import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import PostPresenter from './PostPresenter';
import useInput from '../../Hooks/useInput';

import { useMutation } from "react-apollo-hooks";
import { TOGGLE_LIKE, ADD_COMMENT } from "./PostQueries";

import { toast } from "react-toastify";


const PostContainer = (
    {  
        id,
        user,
        files,
        location,
        likeCount,
        isLiked,
        comments,
        createdAt
    }
) => {
    const [isLikedS, setIsLiked] = useState(isLiked);
    const [likeCountS, setLikeCount] = useState(likeCount);
    const [currentItem, setCurrentItem] = useState(0);

    //댓글 입력시 본인이 입력한 댓글이 바로 화면에서 나타나도록 하기 위한 변수 
    const [selfComments, setSelfComments] = useState([]);

    const comment = useInput("");
   
    const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
      variables: { postId: id }
    });
    const [addCommentMutation] = useMutation(ADD_COMMENT, {
      variables: { postId: id, text: comment.value }
    });
   
   
    //슬라이드 넘기는 함수 
    const slide = () => {
        const totalFiles = files.length;
        if (currentItem === totalFiles - 1) {
          setTimeout(() => setCurrentItem(0), 3000);
        } else {
          setTimeout(() => setCurrentItem(currentItem + 1), 3000);
        }
      };

      useEffect(() => {
        slide();
      }, [currentItem]); //currentItem 값이 변경되면 다시 slide 실행 

      //결과적으로 계속 슬라이딩됨

      //화면에 보이는 값과 실제 db값 분리 
      const toggleLike = () => {
        toggleLikeMutation();
        if (isLikedS === true) {
          setIsLiked(false);
          setLikeCount(likeCountS - 1);
        } else {
          setIsLiked(true);
          setLikeCount(likeCountS + 1);
        }
      };

      // 엔터 눌렀을때 comment 등록하기 
      const onKeyPress = async e => {
        const { which } = e;
        if ( which === 13) {
          e.preventDefault();
          try {
            const {
              data: { addComment }
            } = await addCommentMutation();
            console.log(addComment);
            setSelfComments([...selfComments, addComment]);
            comment.setValue("");
          } catch {
            toast.error("Cant send comment");
          }
        }
        return;
      };      




    return <PostPresenter
        user={user}
        files={files}
        likeCount={likeCountS}
        location={location}
        isLiked={isLikedS}
        comments={comments}
        createdAt={createdAt}
        newComment={comment}
        setIsLiked={setIsLiked}
        setLikeCount={setLikeCount}
        currentItem={currentItem}
        toggleLike={toggleLike}
        onKeyPress={onKeyPress}
        selfComments={selfComments}
    />
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
    createdAt: PropTypes.string.isRequired
  };

export default PostContainer;
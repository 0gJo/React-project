import React from "react"; // 안쓰더라도, 반드시 명시해줘야함 (react 라는 scope를 명시하는 것 )
import {gql} from 'apollo-boost';
import {useQuery} from 'react-apollo-hooks';
import Loader from '../Components/Loader';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Post from '../Components/Post';



const FEED_QUERY = gql`
{
    seeFeed {
      id
      location
      caption
      user {
        id
        avatar
        username
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        user {
          id
          username
        }
      }
      createdAt
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

export default () => {
 
  //loading : 데이터가 불러와졌는지(loading) 아닌지를 알려주는 객체 (boolean)
  const {data, loading} = useQuery(FEED_QUERY);
    
  console.log(data);
  //
  console.log(loading); 

 
  // 컴포넌트가 담고있어야할 데이터들을 서버로부터 가져온뒤 컴포넌트에 속성으로 전달해준다. 
  return <Wrapper>
    <Helmet>
        <title>Feed | Prismagram</title>
      </Helmet>
    {loading&&<Loader/>}
  {!loading &&
        data &&
        data.seeFeed &&
        data.seeFeed.map(post => (
          <Post
            key={post.id}
            id={post.id}
            location={post.location}
            caption={post.caption}
            user={post.user}
            files={post.files}
            likeCount={post.likeCount}
            isLiked={post.isLiked}
            comments={post.comments}
            createdAt={post.createdAt}
          />
        ))}
  
  </Wrapper>


}
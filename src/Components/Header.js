import React from "react";
import styled from 'styled-components';
import Input from './Input';
import { Link, withRouter } from 'react-router-dom';
import useInput from '../Hooks/useInput';
import { useQuery } from "react-apollo-hooks";
import { Compass, HeartEmpty, User, Logo} from './Icons';
import { ME } from "../SharedQueries";

const Header = styled.header`
width: 100%;
border: 0;
position: fixed;
top: 0;
left: 0;
background-color: white;
border-bottom: ${props => props.theme.boxBorder};
border-radius: 0px;
display: flex;
justify-content: center;
align-items: center;
padding: 25px 0px;
z-index: 2;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  justify-content: center;
`;

const HeaderColumn = styled.div`
  width: 33%;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;


const SearchInput = styled(Input)`
background-color: ${props => props.theme.bgColor};
border : ${props => props.theme.boxBorder};
padding: 5px;
font-size: 14px;
border-radius: 3px;
height: auto;
text-align: center;
width: 70%;
&::placeholder {
  opacity: 0.8;
  font-weight: 200;
}
`;

const HeaderLink = styled(Link)`
&:not(:last-child) {
  margin-right: 30px;
}
`;



//withRouter : 컴포넌트를 router 처럼 사용하는 것 (router의 속성들에 접근가능)
export default withRouter(({history}) => {
  const search = useInput(""); //검색어 onchage될때마다 setvalue하므로 실시간 값반영
  
  const {data} = useQuery(ME); // client.js에서 header 설정필요
  
  
  
  const onSearchSubmit = e =>{
      e.preventDefault();
      history.push(`/search?term=${search.value}`);
  }
  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <Link to="/">
            <Logo/>
          </Link>
        </HeaderColumn>
        <HeaderColumn>
          <form onSubmit={ onSearchSubmit }>
            <SearchInput value ={search.value} onChange ={search.onChange} placeholder="Search" />
          </form>
        </HeaderColumn>
        <HeaderColumn>
          <HeaderLink to="/explore">
            <Compass />
          </HeaderLink>
          <HeaderLink to="/notifications">
            <HeartEmpty />
          </HeaderLink>
          {!data||!data.me?(<HeaderLink to="/#">
            <User />
          </HeaderLink>):(
          <HeaderLink to={data.me.username}>
            <User />
          </HeaderLink>
          )
          }
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
});




import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from "prop-types";
import Auth from "../Routes/Auth";
import Home from "./Home";

const LoggedInRoutes = () => (
    <>
      <Route exact path="/" component={Home}></Route>
    </>
)

const LoggedOutRoutes = () => (
    <>
        <Route exact path="/" component={Auth}></Route>
    </>
)


const AppRouter = ({ isLoggedIn }) => (
        <Switch>{isLoggedIn ? <LoggedInRoutes/>: <LoggedOutRoutes/>}</Switch>
)

//PropTypes를 이용해서 React 컴포넌트에 prop으로 넘어오는 입력값들이 어떤 타입을 가져야하는지 정의
AppRouter.propTypes = {
    isLoggedIn : PropTypes.bool.isRequired
}


export default AppRouter;
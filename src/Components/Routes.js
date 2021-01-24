import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from "prop-types";
import Auth from "../Routes/Auth";
import Feed from '../Routes/Feed';
import Profile from '../Routes/Profile';
import Explore from '../Routes/Explore';
import Search from '../Routes/Search';

const LoggedInRoutes = () => (
    <Switch>
      <Route exact path="/" component={Feed}></Route>
      <Route exact path="/search" component={Search}></Route>
      <Route exact path="/explore" component={Explore}></Route>
      <Route exact path="/:username" component={Profile}></Route>
    </Switch>
)

const LoggedOutRoutes = () => (
    <Switch>
        <Route exact path="/" component={Auth}></Route>
    </Switch>
)


const AppRouter = ({ isLoggedIn }) => (
        isLoggedIn ? <LoggedInRoutes/>: <LoggedOutRoutes/>
)

//PropTypes를 이용해서 React 컴포넌트에 prop으로 넘어오는 입력값들이 어떤 타입을 가져야하는지 정의
AppRouter.propTypes = {
    isLoggedIn : PropTypes.bool.isRequired
}


export default AppRouter;
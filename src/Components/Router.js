import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from "prop-types";
import Auth from "./Auth";
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
    <Router>
        <Switch>{isLoggedIn ? <LoggedInRoutes/>: <LoggedOutRoutes/>}</Switch>
    </Router>

)

//PropTypes를 이용해서 React 컴포넌트에 prop으로 넘어오는 입력값들이 어떤 타입을 가져야하는지 정의
AppRouter.propTypes = {
    isLoggedIn : PropTypes.bool.isRequired
}


export default AppRouter;
import React from "react"; // 안쓰더라도, 반드시 명시해줘야함 (react 라는 scope를 명시하는 것 )

import Router from "./Router";

export default () => {
    return (
    // <div>
    //     <h2>React APP</h2>
    // </div>
    <Router isLoggedIn={false}/>

    )
}
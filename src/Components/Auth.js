import React from "react";

export default () =>{

    return (
        <>
                <h2>로그인</h2>
                <form className="user">
                    <input className="form-control form-control-user" placeholder={"Username"}></input><br/>
                    <input placeholder={"Password"}></input><br/>
                    <button>Log in</button>
                </form>
        </>
    )

}
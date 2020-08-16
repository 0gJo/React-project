import React from "react";
import Input from '../../Components/Input'; 
export default ({
    userid,
    userpw,
    onSubmit
}) =>{

    return (
        <>
                <h2>로그인</h2>
                <form onSubmit={onSubmit}>
                    <Input placeholder={"Username"} required {...userid} /><br/>
                    <Input placeholder={"Password"} required {...userpw} /><br/>
                    <button>Log in</button>
                </form>
        </>
    )

}
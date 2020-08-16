import React from "react";
import useInput from "../../Hooks/useInput";
import { useMutation } from 'react-apollo-hooks'
import { CONFIRM_SECRET, LOCAL_LOG_IN  } from './AuthQueries';
import AuthPresenter from './AuthPresenter';

export default () => {

    //1.
    const userid = useInput(""); // 관리 도구 집합 { value, onChange, setValue }
    const userpw = useInput("");

    //2.
    //caught (in promise) TypeError: confirmSecretMutation is not a function
    //const confirmSecretMutation = useMutation(CONFIRM_SECRET, {
    const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
        variables: {
            user_id: userid.value,
            user_pw: userpw.value
        }
    });

    const [localLoginMutation] = useMutation(LOCAL_LOG_IN);

    //3. 로그인 버튼 클릭시 
    const onSubmit = async e => {
        e.preventDefault();
        if (userpw.value !== "") {
            // confirmSecret mutation 질의 시 응답 결과 : 
            // {
            //     "data": {
            //       "confirmSecret": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNTk3NTU2NzA3fQ.IiiNDRIYvkRrREQ6msipqxjmHHnETgU8RE6vupippAk"
            //     }
            //   }
           try {
            const {  data: { confirmSecret: token }} = await confirmSecretMutation();
               alert('successed!');

               localLoginMutation({ variables: { token } });

            } catch (error) {
               console.log(error);
               alert('Wrong email/secret combination');
           }




        }


    }


    return <AuthPresenter
    userid = {userid}
    userpw = {userpw}
    onSubmit = {onSubmit}
    />
}